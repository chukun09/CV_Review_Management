using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Skills.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Skills
{
    public interface ISkillAppService : IAsyncCrudAppService<
       SkillDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateSkillDto,
        CreateUpdateSkillDto>
    {
    }
}
