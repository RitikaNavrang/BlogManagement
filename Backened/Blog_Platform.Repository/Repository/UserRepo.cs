using Blog_Platform.Models;
using Blog_Platform.Repository.Contract;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Blog_Platform.Repository.Repository
{
    public class UserRepo : IUserRepo
    {
        public readonly MyDBContext _context;

        public UserRepo(MyDBContext context)
        {
            _context = context;
        }

        public async Task AddUser(User user)
        {
             await _context.Users.AddAsync(user);
            _context.SaveChanges();
        }
    }
}
