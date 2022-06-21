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
        private readonly IRepository<Province> _provinceRepository;
        private readonly IRepository<District> _districtRepository;
        public AddressAppService(IRepository<AddressEntity, int> repository,
            IRepository<Province> provinceRepository,
            IRepository<District> districtRepository) : base(repository)
        {
            _provinceRepository = provinceRepository;
            _districtRepository = districtRepository;
        }

        public async Task<List<District>> GetAllDistrictByProvince(int id)
        {
            return await _districtRepository.GetAllListAsync(p => p.Province.Id == id);
        }

        public async Task<List<Province>> GetAllProvince()
        {
            var listProvinces = await _provinceRepository.GetAllListAsync();
            return listProvinces;
        }
    }
}
