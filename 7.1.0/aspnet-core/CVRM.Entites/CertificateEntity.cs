using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("cv_certificate")]
    public class CertificateEntity : FullAuditedEntity
    {
        [Required]
        public string CertificateName { get; set; }
        public string? IssuingOrganization { get; set; }
        public DateTime? CompletedDate { get; set; }
        public string? Description { get; set; }
        public string? CredentialID { get; set; }
        public string? CredentialURL { get; set; }
        public int CVId { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
    }
}
