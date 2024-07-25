using Blog_Platform.Models;
using Blog_Platform.Repository.Contract;
using Blog_Platform.Service.Contract;

namespace Blog_Platform.Service.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepo _userRepo;

        public UserService(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        public async Task AddUser(User user)
        {
           await _userRepo.AddUser(user);
        }

    }
}
