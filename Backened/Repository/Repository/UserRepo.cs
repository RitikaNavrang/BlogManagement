using Repository.Contract;

namespace Repository.Repository
{
    public class UserRepo : IUserRepo
    {
        private readonly DbContext _context;
        public UserRepo(DbContext context) 
        {
            _context = context;
        }

        public async Task<User> Register(User user) 
        {

        }
    }
}
