using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CV_Review_Management.EntityFrameworkCore;
using CV_Review_Management.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace CV_Review_Management.Web.Tests
{
    [DependsOn(
        typeof(CV_Review_ManagementWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class CV_Review_ManagementWebTestModule : AbpModule
    {
        public CV_Review_ManagementWebTestModule(CV_Review_ManagementEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CV_Review_ManagementWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(CV_Review_ManagementWebMvcModule).Assembly);
        }
    }
}