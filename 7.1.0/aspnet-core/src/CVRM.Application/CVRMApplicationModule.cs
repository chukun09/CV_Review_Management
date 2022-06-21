using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CVRM.Authorization;
using CVRM.CVEntites;
using CVRM.Entites;

namespace CVRM
{
    [DependsOn(
        typeof(CVRMCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class CVRMApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<CVRMAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(CVRMApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => {
                    cfg.AddMaps(thisAssembly);
                    cfg.CreateMap<CVEntityResult, CVEntity>();
                    }
            );
        }
    }
}
