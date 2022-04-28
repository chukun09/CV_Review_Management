using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.CV.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV
{
    public class CvAppService : AsyncCrudAppService<
        CVEntity,
        CvEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVDto>, ICvAppService
    {
        private readonly IRepository<CVEntity> _iCvEntityRepository;
        public CvAppService(IRepository<CVEntity, int> repository,
            IRepository<CVEntity> _CvEntityRepository) : base(repository)
        {
            _iCvEntityRepository = _CvEntityRepository;
        }
    }
}
