using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.CVLike.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVLike
{
    public interface ICVLikeEntityAppService : IAsyncCrudAppService<
      CVLikeEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVLikeEntityDto,
        CreateUpdateCVLikeEntityDto>
    {
    }
}
