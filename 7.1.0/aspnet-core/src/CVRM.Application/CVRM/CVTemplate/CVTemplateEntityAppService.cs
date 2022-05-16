using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.CVTemplate.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVTemplate
{
    public class CVTemplateEntityAppService : AsyncCrudAppService<
        CVTemplateEntity,
        CVTemplateEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVTemplateEntityDto>, ICVTemplateEntityAppService
    {
        public CVTemplateEntityAppService(IRepository<CVTemplateEntity, int> repository) : base(repository)
        {
        }
    }
}
