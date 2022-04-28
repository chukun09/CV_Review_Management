using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.Entites;
using CVRM.Comment;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CVRM.Comment.DTO;
using CVRM.SignalR;
using CVRM.Comment.Input;

namespace CVRM.Comment
{
    public class CommentAppService : AsyncCrudAppService<
        CommentEntity,
        CommentEntityDTO,
        int,
        GetAllCommentInput,
        CreateUpdateCommentDTO>
    {
        private readonly ICommentDomainService _iDomainCommentService;
        private IHubContext<CommentHub, ITypeHubClient> _hubContext;
        public CommentAppService(IRepository<CommentEntity, int> repository, ICommentDomainService iDomainCommentService
            , IHubContext<CommentHub, ITypeHubClient> hubContext) : base(repository)
        {
            _hubContext = hubContext;
            _iDomainCommentService = iDomainCommentService;
        }
        public override async Task<CommentEntityDTO> CreateAsync(CreateUpdateCommentDTO input)
        {
            var result = _iDomainCommentService.CreateCommentAsync(ObjectMapper.Map<CreateCommentInput>(input));
            await _hubContext.Clients.All.BoardCastSomeThing(result.Result.CvId);
            return ObjectMapper.Map<CommentEntityDTO>(result.Result);
        }
        public override async Task<PagedResultDto<CommentEntityDTO>> GetAllAsync(GetAllCommentInput input)
        {
            var listComments = await _iDomainCommentService.GetAllAsync(input);
            var result = new PagedResultDto<CommentEntityDTO>();
            result.TotalCount = listComments.TotalCount;
            result.Items = ObjectMapper.Map<IReadOnlyList<CommentEntityDTO>>(listComments.Items);
            return result;
        }
    }
}
