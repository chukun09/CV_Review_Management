using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVEntites
{
    public class GetCVByPageInput : PagedAndSortedResultRequestDto
    {
        public int userId { get; set; }
        public string? searchKey { get; set; }
        public int? filter { get; set; }

    }
}
