using Abp.AutoMapper;
using Abp.Domain.Entities;
using CVRM.Entites;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVEntites
{
    [AutoMap(typeof(CVEntity))]
    public class CVEntityResult : Entity
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
        public string? PDFFile { get; set; }
        public string? Description { get; set; }
        public string? Address { get; set; }
        public Gender Gender { get; set; }
        public DateTime? BirthDate { get; set; }
        public int UserId { get; set; }
        public int? TemplateId { get; set; }
        //public CVTemplateEntity? CVTemplateEntity { get; set; }
        public List<EducationEntity> ListEducations { get; set; }
        public List<HobbyEntity> ListHobbies { get; set; }
        public List<ExperienceEntity> ListExperiences { get; set; }
        public List<CertificateEntity> ListCertificates { get; set; }
        public List<SkillEntity> ListSkills { get; set; }
    }
}
