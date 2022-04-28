using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Linq.Extensions;
using CVRM.Authorization.Users;
using CVRM.Entites;
using CVRM.Comment.Input;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Comment
{
    public class CommentDomainService : DomainService, ICommentDomainService
    {
        private readonly IRepository<CommentEntity> _iCommentRepository;
        private readonly UserManager _userManager;

        public CommentDomainService(IRepository<CommentEntity> iCommentRepository, UserManager userManager)
        {
            _iCommentRepository = iCommentRepository;
            _userManager = userManager;
        }

        public async Task<PagedResultDto<CommentResult>> GetAllAsync(GetAllCommentInput input)
        {
            var listParentComment =await _iCommentRepository.
                GetAllIncluding(p => p.User).WhereIf(input.CvId != null
               , p => p.CVId == input.CvId).Where(p => p.CommentId == null).ToListAsync();
            var allComment = from p in listParentComment
                             let id = p.Id
                             select new CommentResult
                             {
                                 Id = p.Id,
                                 CreationTime = p.CreationTime,
                                 CommentId = p.CommentId,
                                 Content = p.Content,
                                 CvId = p.CVId,
                                 UserId = p.UserId,
                                 ListCommentChildren = _iCommentRepository.GetAllIncluding(p => p.User).
                                 WhereIf(input.CvId != null, p => p.CVId == input.CvId).
                                 Where(p => p.CommentId == id).ToList()
                             };
            var results = new PagedResultDto<CommentResult>
            {
                Items = allComment.AsQueryable().PageBy(input).ToList(),
                TotalCount = allComment.Count()
            };
            return results;
        }
        public async Task<CommentResult> CreateCommentAsync(CreateCommentInput commentEntity)
        {
            try
            {
                var commentInput = ObjectMapper.Map<CommentEntity>(commentEntity);
                var newComment = await _iCommentRepository.InsertAsync(commentInput);
                CommentResult result = ObjectMapper.Map<CommentResult>(newComment);
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
