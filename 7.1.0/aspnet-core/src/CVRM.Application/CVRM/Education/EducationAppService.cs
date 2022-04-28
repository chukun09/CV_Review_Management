using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Education.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Education
{
    public class EducationAppService : AsyncCrudAppService<
        EducationEntity,
        EducationDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateEducationDto>, IEducationAppService
    {
        public EducationAppService(IRepository<EducationEntity, int> repository) : base(repository)
        {
        }
    }
}
