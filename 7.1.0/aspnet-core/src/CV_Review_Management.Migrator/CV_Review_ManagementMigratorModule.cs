using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CV_Review_Management.Configuration;
using CV_Review_Management.EntityFrameworkCore;
using CV_Review_Management.Migrator.DependencyInjection;

namespace CV_Review_Management.Migrator
{
    [DependsOn(typeof(CV_Review_ManagementEntityFrameworkModule))]
    public class CV_Review_ManagementMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public CV_Review_ManagementMigratorModule(CV_Review_ManagementEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(CV_Review_ManagementMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                CV_Review_ManagementConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CV_Review_ManagementMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
