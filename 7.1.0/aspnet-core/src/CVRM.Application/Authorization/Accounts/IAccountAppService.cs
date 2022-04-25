using System.Threading.Tasks;
using Abp.Application.Services;
using CVRM.Authorization.Accounts.Dto;

namespace CVRM.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
