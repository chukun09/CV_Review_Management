using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment.DTO
{
    [AutoMap(typeof(CommentEntity))]
    public class CreateUpdateCommentDTO : EntityDto
    {
        [Required]
        public string Content { get; set; }
        [Required]
        public long UserId { get; set; }
        [Required]
        public int JobId { get; set; }
        public int? CommentId { get; set; }
    }
}
 