using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Comment.Input;
using CVRM.Entites;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment.DTO
{
    [AutoMap(typeof(CommentEntity))]
    public class CommentEntityDTO : EntityDto
    {
        public string Content { get; set; }
        public long UserId { get; set; }
        public int CvId { get; set; }
        public int? CommentId { get; set; }
        public List<CommentEntity> ListCommentChildren { get; set; }
    }
}
