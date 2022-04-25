using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Authorization;

namespace CV_Review_Management.Roles.Dto
{
    [AutoMapFrom(typeof(Permission))]
    public class PermissionDto : EntityDto<long>
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }
    }
}
