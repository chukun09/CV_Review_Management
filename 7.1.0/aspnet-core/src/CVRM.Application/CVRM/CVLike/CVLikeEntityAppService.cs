using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using CVRM.CVRM.CVLike.Dto;
using CVRM.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVLike
{
    public class CVLikeEntityAppService : AsyncCrudAppService<
        CVLikeEntity,
        CVLikeEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVLikeEntityDto>, ICVLikeEntityAppService
    {
        private readonly IRepository<CVLikeEntity> _cvLikeRepository;
        public CVLikeEntityAppService(IRepository<CVLikeEntity, int> repository,
            IRepository<CVLikeEntity> cvLikeRepository) : base(repository)
        {
            _cvLikeRepository = cvLikeRepository;
        }

        public async Task<List<CVLikeEntityDto>> GetListCVLikeByCVId(int CVId)
        {
            var cvLikeList = await _cvLikeRepository.GetAllIncluding(p => p.UserEntity).Where(p => p.CVId == CVId).ToListAsync();
            return ObjectMapper.Map<List<CVLikeEntityDto>>(cvLikeList);
        }

        public async Task<CVLikeEntityDto> UpdateStatusLike(int UserId, int CVId)
        {
            CVLikeEntityDto cVLikeEntityDto = new CVLikeEntityDto()
            {
                CVId = CVId,
                UserId = UserId,
            };
            var cvLike = new CVLikeEntity();
            using (UnitOfWorkManager.Current.DisableFilter(AbpDataFilters.SoftDelete))
            {
                cvLike = await _cvLikeRepository.FirstOrDefaultAsync(p => p.UserId == UserId && p.CVId == CVId);
                if (cvLike == null)
                {
                    cvLike = await _cvLikeRepository.InsertAsync(ObjectMapper.Map<CVLikeEntity>(cVLikeEntityDto));
                }
                else
                {
                    cvLike.IsDeleted = !cvLike.IsDeleted;
                    await _cvLikeRepository.UpdateAsync(cvLike);
                }
            }
            return ObjectMapper.Map<CVLikeEntityDto>(cvLike);
        }
    }
}
