using Abp.Application.Services.Dto;

namespace CV_Review_Management.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

