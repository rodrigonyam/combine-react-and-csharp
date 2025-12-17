namespace ProjectManagement.Models.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime? Deadline { get; set; }
        public ProjectStatus Status { get; set; } = ProjectStatus.Active;
        public int OwnerId { get; set; }
        public User Owner { get; set; } = null!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public ICollection<Task> Tasks { get; set; } = new List<Task>();
    }

    public enum ProjectStatus
    {
        Active,
        Completed,
        OnHold,
        Cancelled
    }
}