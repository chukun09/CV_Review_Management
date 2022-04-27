using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("province")]
    public class Province : Entity
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
