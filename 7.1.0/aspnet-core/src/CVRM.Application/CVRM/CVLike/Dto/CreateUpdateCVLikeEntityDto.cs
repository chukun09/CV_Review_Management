using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVLike.Dto
{
    [AutoMap(typeof(CVLikeEntity))]
    public class CreateUpdateCVLikeEntityDto : EntityDto
    {
        public int UserId { get; set; }
        public int CVId { get; set; }
    }
}
