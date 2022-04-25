using System.Threading.Tasks;
using Abp.Application.Services;
using CV_Review_Management.Authorization.Accounts.Dto;

namespace CV_Review_Management.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
