using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Hobby.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Hobby
{
    public class HobbyAppService : AsyncCrudAppService<
        HobbyEntity,
        HobbyDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateHobbyDto>, IHobbyAppService
    {
        public HobbyAppService(IRepository<HobbyEntity, int> repository) : base(repository)
        {
        }
    }
}
