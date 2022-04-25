using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using CVRM.Configuration.Dto;

namespace CVRM.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : CVRMAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
