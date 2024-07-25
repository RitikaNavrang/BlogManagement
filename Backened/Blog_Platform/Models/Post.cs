namespace Blog_Platform.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Picture {  get; set; }
        public int ProfileId { get; set; }
        public string Content { get; set; }
        public int TagId { get; set; }
        public int CategoryID { get; set; }
        public bool IsActive { get; set; }

    }
}
