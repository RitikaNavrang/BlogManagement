using Blog.Repository.Contract;
using Blog_Platform.Models;

namespace Blog.Repository.Repo
{
    public class UserRepo: IUserRepo
    {
        private readonly Context _context; 
        public UserRepo(Context context)
        {
            _context = context;
        }
    }
}
