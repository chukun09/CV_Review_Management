using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.CV.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV
{
    public interface ICvAppService :  IAsyncCrudAppService<
        CvEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVDto,
        CreateUpdateCVDto>
    {
    }
}
