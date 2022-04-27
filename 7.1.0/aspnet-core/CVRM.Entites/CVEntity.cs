using Abp.Domain.Entities.Auditing;
using CVRM.Entites.Users;
using CVRM.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.Entites
{
    [Table("user_cv")]
    public class CVEntity : FullAuditedEntity
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
        [ForeignKey("UserId")]
        public UserEntity UserEntity { get; set; }
    }
}
