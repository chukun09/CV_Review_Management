using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CVRM.CVRM.Certificate.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Certificate
{
    public interface ICertificateAppService : IAsyncCrudAppService<
        CertificateDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCertificateDto,
        CreateUpdateCertificateDto>
    {
    }
}
