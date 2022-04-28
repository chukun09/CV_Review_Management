using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.Certificate.DTO;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Certificate
{
    public class CertificateAppService : AsyncCrudAppService<
        CertificateEntity,
        CertificateDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateUpdateCertificateDto>, ICertificateAppService
    {
        public CertificateAppService(IRepository<CertificateEntity, int> repository) : base(repository)
        {
        }
    }
}
