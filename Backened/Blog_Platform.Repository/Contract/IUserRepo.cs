using Blog_Platform.Models;

namespace Blog_Platform.Repository.Contract
{
    public interface IUserRepo
    {
        Task AddUser(User user);
    }
}
