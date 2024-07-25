namespace Blog_Platform.Models
{
    public class Comments
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public int UserId { get; set; }
        public string Comment { get; set; }
        public DateTime PublishedDate { get; set; }   
        public bool IsActive { get; set; }
    }
}
