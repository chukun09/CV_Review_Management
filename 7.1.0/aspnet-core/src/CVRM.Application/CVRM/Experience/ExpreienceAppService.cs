using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Experience.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Experience
{
    public class ExpreienceAppService : AsyncCrudAppService<
        ExperienceEntity,
        ExpreienceDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateExpreienceDto>, IExpreienceAppService
    {
        public ExpreienceAppService(IRepository<ExperienceEntity, int> repository) : base(repository)
        {
        }
    }
}
