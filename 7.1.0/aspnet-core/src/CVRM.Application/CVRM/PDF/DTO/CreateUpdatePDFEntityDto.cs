using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.PDF.DTO
{
      [AutoMap(typeof(PDFEntity))]
    public class CreateUpdatePDFEntityDto : EntityDto
    {
        [Required]
        public string JsonPDF { get; set; }
        public int CVId { get; set; }
    }
}
