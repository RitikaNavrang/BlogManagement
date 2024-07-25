using Repository.Contract;
using Repository.Repository;

namespace Blog_Platform.Configuration
{
    public static class DependencyConfiguration
    {
        public static void ConfigureDependency(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IUserRepo, UserRepo>();
        }
    }
}
