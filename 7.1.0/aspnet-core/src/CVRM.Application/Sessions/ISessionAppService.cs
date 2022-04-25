using System.Threading.Tasks;
using Abp.Application.Services;
using CVRM.Sessions.Dto;

namespace CVRM.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
