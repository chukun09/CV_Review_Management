using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Address.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Address
{
    public interface IAddressAppService : IAsyncCrudAppService<
       UserAddressDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateUserAddressDto,
        CreateUpdateUserAddressDto>
    {
    }
}
