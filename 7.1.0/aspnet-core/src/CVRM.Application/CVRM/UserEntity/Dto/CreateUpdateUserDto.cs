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

namespace CVRM.CVRM.User.Dto
{
    [AutoMap(typeof(UserEntity))]
    public class CreateUpdateUserDto : EntityDto
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime? BirthDate { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Phone, StringLength(10)]
        public string? PhoneNumber { get; set; }
        public string? Skills { get; set; }
        public long UserId { get; set; }

    }
}
