using System.Threading.Tasks;
using CV_Review_Management.Configuration.Dto;

namespace CV_Review_Management.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
