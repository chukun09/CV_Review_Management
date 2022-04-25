using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CV_Review_Management.MultiTenancy;

namespace CV_Review_Management.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
