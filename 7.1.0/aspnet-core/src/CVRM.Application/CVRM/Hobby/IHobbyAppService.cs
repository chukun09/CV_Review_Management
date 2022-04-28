using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Hobby.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Hobby
{
    public interface IHobbyAppService : IAsyncCrudAppService<
       HobbyDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateHobbyDto,
        CreateUpdateHobbyDto>
    {
    }
}
