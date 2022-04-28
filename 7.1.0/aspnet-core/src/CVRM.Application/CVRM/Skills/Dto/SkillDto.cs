using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Skills.Dto
{
    [AutoMap(typeof(SkillEntity))]
    public class SkillDto : EntityDto
    {
        public string SkillName { get; set; }
        public Level Level { get; set; }
        public SkillType SkillType { get; set; }
        public int CVId { get; set; }
    }
}
