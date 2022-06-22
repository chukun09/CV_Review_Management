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
    public class CVEntityAllInformationsInput : Entity
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
        public int? TemplateId { get; set; }
        //public CVTemplateEntity? CVTemplateEntity { get; set; }
        public List<EducationEntityInput>? ListEducations { get; set; }
        public List<HobbyEntityInput>? ListHobbies { get; set; }
        public List<ExperienceEntityInput>? ListExperiences { get; set; }
        public List<CertificateEntityInput>? ListCertificates { get; set; }
        public List<SkillEntityInput>? ListSkills { get; set; }
    }
    [AutoMap(typeof(EducationEntity))]
    public class EducationEntityInput : Entity
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string SchoolName { get; set; }
        public SchoolType SchoolType { get; set; }
        public string Major { get; set; }
        public string? Description { get; set; }
        public int CVId { get; set; }
    }
    [AutoMap(typeof(ExperienceEntity))]
    public class ExperienceEntityInput : Entity
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
    [AutoMap(typeof(HobbyEntity))]
    public class HobbyEntityInput : Entity
    {
        public string NameHobby { get; set; }
        public int CVId { get; set; }
    }
    [AutoMap(typeof(SkillEntity))]
    public class SkillEntityInput : Entity
    {
        public string SkillName { get; set; }
        public Level Level { get; set; }
        public SkillType SkillType { get; set; }
        public int CVId { get; set; }
    }
    [AutoMap(typeof(CertificateEntity))]
    public class CertificateEntityInput : Entity
    {
        [Required]
        public string CertificateName { get; set; }
        public DateTime? CompletedDate { get; set; }
        public string Description { get; set; }
        public int CVId { get; set; }
    }
}
