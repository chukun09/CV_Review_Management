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
    [Table("cv_skill")]
    public class SkillEntity : FullAuditedEntity
    {
        public string SkillName { get; set; }
        public Level Level { get; set; }
        public SkillType SkillType { get; set; }
        public int CVId { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
    }
}
