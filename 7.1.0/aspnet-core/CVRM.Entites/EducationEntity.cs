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
    [Table("cv_education")]
    public class EducationEntity : FullAuditedEntity
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string SchoolName { get; set; }
        public SchoolType SchoolType { get; set; }
        public string Major { get; set; }
        public int CVId { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
    }
}
