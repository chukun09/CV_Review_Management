using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.CV.Dto;
using CVRM.CVRM.User.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.UserManagement
{
    public interface IUserEntityAppService : IAsyncCrudAppService<
        UserEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateUserDto,
        CreateUpdateUserDto>
    {
    }
}
