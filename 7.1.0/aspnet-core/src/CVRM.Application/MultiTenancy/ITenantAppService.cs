using Abp.Application.Services;
using CVRM.MultiTenancy.Dto;

namespace CVRM.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

