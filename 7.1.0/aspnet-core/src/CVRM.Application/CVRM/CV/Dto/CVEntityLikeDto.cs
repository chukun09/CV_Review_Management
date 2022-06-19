using Abp.AutoMapper;
using CVRM.CVEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CV.Dto
{
    [AutoMap(typeof(CVEntityLikeResult))]
    public class CVEntityLikeDto : CvEntityDto
    {
        public bool IsLike { get; set; }
        public int TotalLike { get; set; }
    }
}
