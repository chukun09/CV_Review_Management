using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVEntites;
using CVRM.CVRM.CV.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV
{
    public class CVAppService : AsyncCrudAppService<
        CVEntity,
        CvEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVDto>, ICvAppService
    {
        private readonly ICVEntityDomainService _cvEntityDomainService;
        public CVAppService(IRepository<CVEntity, int> repository,
            ICVEntityDomainService cvEntityDomainService) : base(repository)
        {
            _cvEntityDomainService = cvEntityDomainService;
        }

        public Task<CVEntityResult> GetDetailCVEntityAsync(int id)
        {
            return _cvEntityDomainService.GetDetailCVByCVId(id);
        }
    }
}
