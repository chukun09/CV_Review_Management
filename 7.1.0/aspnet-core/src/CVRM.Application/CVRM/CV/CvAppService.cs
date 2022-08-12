using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CVRM.Authorization;
using CVRM.CVEntites;
using CVRM.CVRM.CV.Dto;
using CVRM.Entites;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV
{
    [AbpAuthorize(PermissionNames.Pages_Users)]
    public class CVAppService : AsyncCrudAppService<
        CVEntity,
        CvEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVDto>, ICvAppService
    {
        private readonly ICVEntityDomainService _cvEntityDomainService;
        public CVAppService(IRepository<CVEntity, int> repository,
            ICVEntityDomainService cvEntityDomainService) : base(repository)
        {
            _cvEntityDomainService = cvEntityDomainService;
        }

        public Task<IActionResult> ConvertImageToPDF(ImageUpload input)
        {
            return _cvEntityDomainService.ConvertImageToPDF(input.ImageFile, input.ImageName, input.CVId);
        }

        public async Task<IActionResult> CreateNewCVAndAllInformations(CVEntityAllInformationsInput input)
        {
            return await _cvEntityDomainService.CreateNewCVAndAllInformation(input);
        }

        public async Task<IActionResult> EditCVAndAllInformations(CVEntityAllInformationsInput input)
        {
            return await _cvEntityDomainService.EditCVAndAllInformation(input);
        }

        public async Task<List<CVEntityLikeDto>> GetAllCVByUserAsync(int userId)
        {
            var listCV = await _cvEntityDomainService.GetAllCVByUserAsync(userId);
            return ObjectMapper.Map<List<CVEntityLikeDto>>(listCV);
        }

        public async Task<PagedResultDto<CVEntityLikeDto>> GetAllDataByPageAsync(GetCVByPageInput input)
        {
            try
            {
                var listCV = await _cvEntityDomainService.GetAllDataByPageAsync(input);
                var result = new PagedResultDto<CVEntityLikeDto>();
                result.TotalCount = listCV.TotalCount;
                result.Items = ObjectMapper.Map<IReadOnlyList<CVEntityLikeDto>>(listCV.Items);
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Task<CVEntityResult> GetDetailCVEntityAsync(int id)
        {
            return _cvEntityDomainService.GetDetailCVByCVId(id);
        }
        //public async Task<IActionResult> uploadImage(ImageUpload input)
        //{
        //    return await _cvEntityDomainService.uploadImage(input.ImageFile);
        //}
    }
    public class ImageUpload
    {
        public int CVId { get; set; }
        public string ImageFile { get; set; }
        public string ImageName { get; set; }
    }
}
