using Blog_Platform.Models;

namespace Blog_Platform.Service.Contract
{
    public interface IUserService
    {
        Task AddUser(User user);
    }
}
