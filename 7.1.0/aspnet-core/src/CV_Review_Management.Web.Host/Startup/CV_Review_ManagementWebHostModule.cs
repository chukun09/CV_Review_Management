using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CV_Review_Management.Configuration;

namespace CV_Review_Management.Web.Host.Startup
{
    [DependsOn(
       typeof(CV_Review_ManagementWebCoreModule))]
    public class CV_Review_ManagementWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public CV_Review_ManagementWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CV_Review_ManagementWebHostModule).GetAssembly());
        }
    }
}
