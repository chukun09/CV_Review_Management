using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.PDF.DTO;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.PDF
{
    public class PDFEntityAppService : AsyncCrudAppService<
        PDFEntity,
        PDFEntityDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdatePDFEntityDto>, IPDFEntityAppService
    {
        private readonly IRepository<PDFEntity> _iPDFRepository;
        public PDFEntityAppService(IRepository<PDFEntity, int> repository,
             IRepository<PDFEntity> iPDFRepository) : base(repository)
        {
            _iPDFRepository = iPDFRepository;
    }
        public async Task<string> getPDFJsonById(int id) =>  _iPDFRepository.FirstOrDefaultAsync(p => p.Id == id).Result.JsonPDF;
    }
}
