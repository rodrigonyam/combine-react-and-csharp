namespace ProjectManagement.Models.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public int TaskId { get; set; }
        public Task Task { get; set; } = null!;
        public int AuthorId { get; set; }
        public User Author { get; set; } = null!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}