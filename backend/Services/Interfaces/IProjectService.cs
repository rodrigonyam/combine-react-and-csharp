using ProjectManagement.Models.DTOs;

namespace ProjectManagement.Services.Interfaces
{
    public interface IProjectService
    {
        Task<IEnumerable<ProjectDto>> GetAllProjectsAsync();
        Task<ProjectDto?> GetProjectByIdAsync(int id);
        Task<ProjectDto> CreateProjectAsync(CreateProjectDto createProjectDto, int ownerId);
        Task<ProjectDto?> UpdateProjectAsync(int id, UpdateProjectDto updateProjectDto);
        Task<bool> DeleteProjectAsync(int id);
    }
}