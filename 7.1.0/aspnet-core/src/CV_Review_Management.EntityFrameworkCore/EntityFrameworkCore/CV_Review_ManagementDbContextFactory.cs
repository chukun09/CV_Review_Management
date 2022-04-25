using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using CV_Review_Management.Configuration;
using CV_Review_Management.Web;

namespace CV_Review_Management.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class CV_Review_ManagementDbContextFactory : IDesignTimeDbContextFactory<CV_Review_ManagementDbContext>
    {
        public CV_Review_ManagementDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<CV_Review_ManagementDbContext>();
            
            /*
             You can provide an environmentName parameter to the AppConfigurations.Get method. 
             In this case, AppConfigurations will try to read appsettings.{environmentName}.json.
             Use Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") method or from string[] args to get environment if necessary.
             https://docs.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli#args
             */
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            CV_Review_ManagementDbContextConfigurer.Configure(builder, configuration.GetConnectionString(CV_Review_ManagementConsts.ConnectionStringName));

            return new CV_Review_ManagementDbContext(builder.Options);
        }
    }
}
