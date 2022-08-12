using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVEntites;
using CVRM.CVRM.CV.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV
{
    public interface ICvAppService :  IAsyncCrudAppService<
        CvEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCVDto,
        CreateUpdateCVDto>
    {
        Task<CVEntityResult> GetDetailCVEntityAsync(int id);
        Task<List<CVEntityLikeDto>> GetAllCVByUserAsync(int userId);
        Task<IActionResult> CreateNewCVAndAllInformations(CVEntityAllInformationsInput input);
        //Task<IActionResult> uploadImage(ImageUpload input);
        Task<IActionResult> ConvertImageToPDF(ImageUpload input);
        Task<IActionResult> EditCVAndAllInformations(CVEntityAllInformationsInput input);
        Task<PagedResultDto<CVEntityLikeDto>> GetAllDataByPageAsync(GetCVByPageInput input);

    }
}
