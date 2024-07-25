namespace Blog_Platform.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Bio { get; set; }
        public string ProfilePhoto { get; set; }
        public bool IsActive { get; set; }
    }
}
