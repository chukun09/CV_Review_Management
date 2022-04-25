using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using CV_Review_Management.Configuration.Dto;

namespace CV_Review_Management.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : CV_Review_ManagementAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
