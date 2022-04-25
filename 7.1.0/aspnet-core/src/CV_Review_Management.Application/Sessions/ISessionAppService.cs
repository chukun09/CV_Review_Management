using System.Threading.Tasks;
using Abp.Application.Services;
using CV_Review_Management.Sessions.Dto;

namespace CV_Review_Management.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
