using Blog_Platform.Models;
using Microsoft.EntityFrameworkCore;

namespace Blog_Platform
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Tags> Tags { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<UserFeed> Feeds { get; set; }
        public DbSet<Comments> Comments { get; set; }
    }

}
