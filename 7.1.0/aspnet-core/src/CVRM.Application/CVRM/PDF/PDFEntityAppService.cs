using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.PDF.DTO;
using CVRM.Entites;
using CVRM.SignalR;
using Microsoft.AspNetCore.SignalR;
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
        private IHubContext<AnnotationHub, ITypeHubClient> _hubContext;
        public PDFEntityAppService(IRepository<PDFEntity, int> repository,
             IRepository<PDFEntity> iPDFRepository,
             IHubContext<AnnotationHub, ITypeHubClient> hubContext) : base(repository)
        {
            _iPDFRepository = iPDFRepository;
            _hubContext = hubContext;
    }
        public override async Task<PDFEntityDto> CreateAsync(CreateUpdatePDFEntityDto input)
        {

             var result = _iPDFRepository.InsertAsync(ObjectMapper.Map<PDFEntity>(input));
            await _hubContext.Clients.All.BoardCastAnnotation();
            return ObjectMapper.Map<PDFEntityDto>(result.Result);
        }
        public async Task<string> getPDFJsonByCVId(int id) =>  _iPDFRepository.GetAll().OrderByDescending(p => p.CreationTime).FirstOrDefault(p => p.CVId == id)?.JsonPDF;
    }
}
