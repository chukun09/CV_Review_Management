using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVEntites
{
    [AutoMap(typeof(CVEntity))]
    public class CVEntityLikeResult : CVEntity
    {
        public bool IsLike { get; set; }
        public int TotalLike { get; set; }
    }
}
