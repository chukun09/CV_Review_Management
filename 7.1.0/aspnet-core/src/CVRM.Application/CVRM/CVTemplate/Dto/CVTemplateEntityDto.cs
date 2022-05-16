using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.CVTemplate.Dto
{
    [AutoMap(typeof(CVTemplateEntity))]
    public class CVTemplateEntityDto : EntityDto
    {
        public string? Name { get; set; }
        public string TemplateURL { get; set; }
        public string ImageURL { get; set; }
    }
}
