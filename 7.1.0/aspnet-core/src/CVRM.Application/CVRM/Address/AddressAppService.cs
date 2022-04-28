using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Address.Dto;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Address
{
    public class AddressAppService : AsyncCrudAppService<
        AddressEntity,
        UserAddressDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateUserAddressDto>, IAddressAppService
    {
        public AddressAppService(IRepository<AddressEntity, int> repository) : base(repository)
        {
        }
    }
}
