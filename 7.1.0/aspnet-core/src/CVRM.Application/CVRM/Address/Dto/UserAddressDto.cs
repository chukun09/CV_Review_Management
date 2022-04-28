using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Address.Dto
{
    [AutoMap(typeof(AddressEntity))]
    public class UserAddressDto : EntityDto
    {
        public int ProvinceId { get; set; }
        public Province Province { get; set; }
        public int DistrictId { get; set; }
        public District District { get; set; }
        public int UserId { get; set; }
        public UserEntity UserEntity { get; set; }
    }
}
