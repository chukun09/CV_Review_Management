using System.Threading.Tasks;
using CVRM.Configuration.Dto;

namespace CVRM.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
