using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CVRM.EntityFrameworkCore;
using CVRM.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace CVRM.Web.Tests
{
    [DependsOn(
        typeof(CVRMWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class CVRMWebTestModule : AbpModule
    {
        public CVRMWebTestModule(CVRMEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CVRMWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(CVRMWebMvcModule).Assembly);
        }
    }
}