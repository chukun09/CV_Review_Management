using Abp.Domain.Entities.Auditing;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("cv_experience")]
    public class ExperienceEntity : FullAuditedEntity
    {
        [Required]
        public string Position { get; set; }
        [Required]
        public string? Company { get; set; }
        public string? Location { get; set; }
        public EmploymentType EmploymentType { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        [Required]
        public string? Industry { get; set; }
        public string? Description { get; set; }
        public string? Skills { get; set; }
        public int CVId { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
    }
}
