using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment.Input
{
    public class GetAllCommentInput : PagedAndSortedResultRequestDto
    {
        public int? CvId { get; set; }
    }
}
