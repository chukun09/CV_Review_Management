using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Education.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Education
{
    public interface IEducationAppService : IAsyncCrudAppService<
       EducationDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateEducationDto,
        CreateUpdateEducationDto>
    {
    }
}
