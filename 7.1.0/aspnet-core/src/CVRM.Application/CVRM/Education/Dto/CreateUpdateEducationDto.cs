using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Education.Dto
{
    [AutoMap(typeof(EducationEntity))]
    public class CreateUpdateEducationDto : EntityDto
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string SchoolName { get; set; }
        public SchoolType SchoolType { get; set; }
        public string Major { get; set; }
        public int CVId { get; set; }
    }
}
