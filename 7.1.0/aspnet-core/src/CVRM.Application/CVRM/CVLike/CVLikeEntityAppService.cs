using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.CVLike.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVLike
{
    public class CVLikeEntityAppService : AsyncCrudAppService<
        CVLikeEntity,
        CVLikeEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVLikeEntityDto>, ICVLikeEntityAppService
    {
        public CVLikeEntityAppService(IRepository<CVLikeEntity, int> repository) : base(repository)
        {
        }
    }
}
