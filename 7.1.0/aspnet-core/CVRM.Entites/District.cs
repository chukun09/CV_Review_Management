using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("district")]
    public class District : Entity
    {
        [Required]
        public string DistrictName { get; set; }
        public string Prefix { get; set; }
        [ForeignKey("ProvinceID")]
        public Province Province { set; get; }
    }
}
