using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Skills.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Skills
{
    public class SkillAppService : AsyncCrudAppService<
        SkillEntity,
        SkillDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateSkillDto>, ISkillAppService
    {
        public SkillAppService(IRepository<SkillEntity, int> repository) : base(repository)
        {
        }
    }
}
