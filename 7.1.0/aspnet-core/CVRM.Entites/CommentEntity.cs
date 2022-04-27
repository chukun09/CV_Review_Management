using Abp.Domain.Entities.Auditing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("cv_comment")]
    public class CommentEntity : FullAuditedEntity
    {
        public string Content { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public UserEntity User { get; set; }
        public int CVId { get; set; }
        [ForeignKey("CVId")]
        public CVEntity CVEntity { get; set; }
        public int? CommentId { get; set; }
        [ForeignKey("CommentId")]
        [JsonIgnore]
        public CommentEntity? CommentParent { get; set; }
    }
}
