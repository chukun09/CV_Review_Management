using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
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
           return _cvEntityDomainService.ConvertImageToPDF(input.ImageFile, input.ImageName);
        }

        public async Task<IActionResult> CreateNewCVAndAllInformations(CVEntityAllInformationsInput input)
        {
            var isAddNewCV = await _cvEntityDomainService.CreateNewCVAndAllInformation(input);
            if (isAddNewCV)
            {
                return new OkObjectResult("Thêm CV thành công");
            }
            return new BadRequestResult();
        }

        public async Task<List<CVEntityLikeDto>> GetAllCVByUserAsync(int userId)
        {
            var listCV = await _cvEntityDomainService.GetAllCVByUserAsync(userId);
            return ObjectMapper.Map<List<CVEntityLikeDto>>(listCV);
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
        public string ImageFile { get; set; }
        public string ImageName { get; set; }
    }
}
