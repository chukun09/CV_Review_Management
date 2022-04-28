using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CVRM.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.Hobby.Dto
{
    [AutoMap(typeof(HobbyEntity))]
    public class CreateUpdateHobbyDto : EntityDto
    {
        public string NameHobby { get; set; }
        public int CVId { get; set; }
    }
}
