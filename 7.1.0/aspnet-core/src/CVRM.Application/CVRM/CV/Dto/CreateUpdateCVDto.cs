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

namespace CVRM.CVRM.CV.Dto
{
   [AutoMap(typeof(CVEntity))]
    public class CreateUpdateCVDto : EntityDto
    {
        public string Avatar { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Phone, StringLength(10)]
        public string? PhoneNumber { get; set; }
        public string? Headline { get; set; }
        public string? Description { get; set; }
        public string? Address { get; set; }
        public Gender Gender { get; set; }
        public DateTime? BirthDate { get; set; }
        public int UserId { get; set; }
    }
}
