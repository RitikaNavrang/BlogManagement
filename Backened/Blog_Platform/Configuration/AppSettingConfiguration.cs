namespace Blog_Platform.Configuration
{
    public class AppSettingConfiguration
    {
        public static IConfiguration BuildAppSettingConfiguration()
        {
            return new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile(
                    $"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json",
                    optional: true,
                    reloadOnChange: true)
                .Build();
        }
    }
}
