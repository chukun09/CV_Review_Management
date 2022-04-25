using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CV_Review_Management.Authorization;

namespace CV_Review_Management
{
    [DependsOn(
        typeof(CV_Review_ManagementCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class CV_Review_ManagementApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<CV_Review_ManagementAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(CV_Review_ManagementApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
