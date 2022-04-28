using Abp.Application.Services.Dto;
using Abp.Domain.Services;
using CVRM.Comment.Input;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment
{
    public interface ICommentDomainService : IDomainService
    {
        Task<PagedResultDto<CommentResult>> GetAllAsync(GetAllCommentInput input);
        Task<CommentResult> CreateCommentAsync(CreateCommentInput commentEntity);
    }
}
