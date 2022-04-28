using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Experience.Dto
{
    [AutoMap(typeof(ExperienceEntity))]
    public class ExpreienceDto : EntityDto
    {
        [Required]
        public string Position { get; set; }
        [Required]
        public string Company { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }
        public int CVId { get; set; }
    }
}
