using Abp.Domain.Services;
using CVRM.CVEntites;
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
    }
}
