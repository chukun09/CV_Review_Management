using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Experience.Dto
{
    [AutoMap(typeof(ExperienceEntity))]
    public class CreateUpdateExpreienceDto : EntityDto
    {
        [Required]
        public string Position { get; set; }
        [Required]
        public string Company { get; set; }
        public string? Location { get; set; }
        public EmploymentType EmploymentType { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        [Required]
        public string? Industry { get; set; }
        public string? Description { get; set; }
        public string? Skills { get; set; }
        public int CVId { get; set; }
    }
}
