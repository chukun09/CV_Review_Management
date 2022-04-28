using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Experience.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Experience
{
    public interface IExpreienceAppService : IAsyncCrudAppService<
        ExpreienceDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateExpreienceDto,
        CreateUpdateExpreienceDto>
    {
    }
}
