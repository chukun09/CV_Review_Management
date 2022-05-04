using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.PDF.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.PDF
{
    public interface IPDFEntityAppService : IAsyncCrudAppService<
      PDFEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdatePDFEntityDto,
        CreateUpdatePDFEntityDto>
    {
    }
}
