using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Certificate.DTO
{
    [AutoMap(typeof(CertificateEntity))]
    public class CreateUpdateCertificateDto : EntityDto
    {
        [Required]
        public string CertificateName { get; set; }
        public DateTime? CompletedDate { get; set; }
        public string Description { get; set; }
        public int CVId { get; set; }
    }
}
