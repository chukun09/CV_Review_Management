using Abp.Domain.Services;
using CVRM.CVEntites;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVEntites
{
    public interface ICVEntityDomainService : IDomainService
    {
        Task<CVEntityResult> GetDetailCVByCVId(int id);
        Task<List<CVEntityLikeResult>> GetAllCVByUserAsync(int userId);
        Task<IActionResult> CreateNewCVAndAllInformation(CVEntityAllInformationsInput result);
        Task<IActionResult> EditCVAndAllInformation(CVEntityAllInformationsInput result);
        Task<string> UploadImage(string input);
        Task<IActionResult> ConvertImageToPDF(string input, string pdfName, int cvId);
    }
}
