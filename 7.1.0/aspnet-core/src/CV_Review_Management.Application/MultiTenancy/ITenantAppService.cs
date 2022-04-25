using Abp.Application.Services;
using CV_Review_Management.MultiTenancy.Dto;

namespace CV_Review_Management.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

