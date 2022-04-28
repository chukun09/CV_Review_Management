using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using CVRM.Entites;
using CVRM.Entites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment.Input
{
    public class CommentResult : FullAuditedEntity
    {
        public string Content { get; set; }
        public int UserId { get; set; }
        public int CvId { get; set; }
        public int? CommentId { get; set; }
        public List<CommentEntity> ListCommentChildren { get; set; }
    }
}
