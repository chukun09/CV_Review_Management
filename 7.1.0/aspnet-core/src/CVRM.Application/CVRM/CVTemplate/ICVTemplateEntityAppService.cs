using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.CVTemplate.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVTemplate
{
    public interface ICVTemplateEntityAppService : IAsyncCrudAppService<
      CVTemplateEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVTemplateEntityDto,
        CreateUpdateCVTemplateEntityDto>
    {
    }
}
