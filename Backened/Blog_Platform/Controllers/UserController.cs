using Microsoft.AspNetCore.Mvc;

namespace Blog_Platform.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserService _service;

        public UserController(MyDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}
