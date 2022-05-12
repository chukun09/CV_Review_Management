using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("cv_likes")]
    public class CVLikeEntity : FullAuditedEntity
    {
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public UserEntity UserEntity { get; set; }
        public int CVId  { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
    }
}
