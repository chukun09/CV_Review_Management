using Abp.Domain.Entities.Auditing;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("user_address")]
    public class AddressEntity : FullAuditedEntity
    {
        public int ProvinceId { get; set; }
        public Province Province { get; set; }
        public int DistrictId { get; set; }
        public District District { get; set; }
        public int UserId { get; set; }
        public UserEntity UserEntity { get; set; }
    }
}
