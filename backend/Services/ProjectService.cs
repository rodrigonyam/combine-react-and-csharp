using Microsoft.EntityFrameworkCore;
using ProjectManagement.Data;
using ProjectManagement.Models.DTOs;
using ProjectManagement.Models.Entities;
using ProjectManagement.Services.Interfaces;

namespace ProjectManagement.Services
{
    public class ProjectService : IProjectService
    {
        private readonly ApplicationDbContext _context;

        public ProjectService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProjectDto>> GetAllProjectsAsync()
        {
            var projects = await _context.Projects
                .Include(p => p.Owner)
                .Include(p => p.Tasks)
                .ToListAsync();

            return projects.Select(MapToProjectDto);
        }

        public async Task<ProjectDto?> GetProjectByIdAsync(int id)
        {
            var project = await _context.Projects
                .Include(p => p.Owner)
                .Include(p => p.Tasks)
                .FirstOrDefaultAsync(p => p.Id == id);

            return project != null ? MapToProjectDto(project) : null;
        }

        public async Task<ProjectDto> CreateProjectAsync(CreateProjectDto createProjectDto, int ownerId)
        {
            var project = new Project
            {
                Name = createProjectDto.Name,
                Description = createProjectDto.Description,
                Deadline = createProjectDto.Deadline,
                OwnerId = ownerId,
                Status = ProjectStatus.Active,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            // Reload the project with owner information
            var createdProject = await _context.Projects
                .Include(p => p.Owner)
                .Include(p => p.Tasks)
                .FirstAsync(p => p.Id == project.Id);

            return MapToProjectDto(createdProject);
        }

        public async Task<ProjectDto?> UpdateProjectAsync(int id, UpdateProjectDto updateProjectDto)
        {
            var project = await _context.Projects
                .Include(p => p.Owner)
                .Include(p => p.Tasks)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (project == null)
                return null;

            project.Name = updateProjectDto.Name;
            project.Description = updateProjectDto.Description;
            project.Deadline = updateProjectDto.Deadline;
            project.Status = updateProjectDto.Status;
            project.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return MapToProjectDto(project);
        }

        public async Task<bool> DeleteProjectAsync(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
                return false;

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return true;
        }

        private static ProjectDto MapToProjectDto(Project project)
        {
            return new ProjectDto
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                Deadline = project.Deadline,
                Status = project.Status.ToString(),
                OwnerId = project.OwnerId,
                OwnerName = $"{project.Owner.FirstName} {project.Owner.LastName}",
                CreatedAt = project.CreatedAt,
                TaskCount = project.Tasks?.Count ?? 0
            };
        }
    }
}