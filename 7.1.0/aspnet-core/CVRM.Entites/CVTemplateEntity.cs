using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("cv_template")]
    public class CVTemplateEntity : FullAuditedEntity
    {
        public string? Name { get; set; }
        public string TemplateURL { get; set; }
        public string ImageURL { get; set; }
        public string StyleURL { get; set; }
    }
}
