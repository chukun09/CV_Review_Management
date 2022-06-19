using Abp.Domain.Repositories;
using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CVRM.Entites;
using CVRM.Entites;

namespace CVRM.CVEntites
{
    public class CVEntityDomainService : DomainService, ICVEntityDomainService
    {
        private readonly IRepository<CVEntity> _cvEntityRepository;
        private readonly IRepository<EducationEntity> _educationEntityRepository;
        private readonly IRepository<SkillEntity> _skillEntityRepository;
        private readonly IRepository<ExperienceEntity> _experienceEntityRepository;
        private readonly IRepository<HobbyEntity> _hobbyEntityRepository;
        private readonly IRepository<CertificateEntity> _certificateEntityRepository;
        private readonly IRepository<CVTemplateEntity> _cvTemplateEntityRepository;
        private readonly IRepository<CVLikeEntity> _cvLikeEntityRepository;

        public CVEntityDomainService(IRepository<CVEntity> cvEntityRepository,
            IRepository<EducationEntity> educationEntityRepository, IRepository<SkillEntity> skillEntityRepository,
            IRepository<ExperienceEntity> experienceEntityRepository, IRepository<HobbyEntity> hobbyEntityRepository,
            IRepository<CertificateEntity> certificateEntityRepository, IRepository<CVTemplateEntity> cvTemplateEntityRepository,
            IRepository<CVLikeEntity> cvLikeEntityRepository)
        {
            _cvEntityRepository = cvEntityRepository;
            _educationEntityRepository = educationEntityRepository;
            _skillEntityRepository = skillEntityRepository;
            _experienceEntityRepository = experienceEntityRepository;
            _hobbyEntityRepository = hobbyEntityRepository;
            _certificateEntityRepository = certificateEntityRepository;
            _cvTemplateEntityRepository = cvTemplateEntityRepository;
            _cvLikeEntityRepository = cvLikeEntityRepository;
        }

        public async Task<List<CVEntityLikeResult>> GetAllCVByUserAsync(int userId)
        {
            var result = new List<CVEntityLikeResult>();
            var allCV = await _cvEntityRepository.GetAllListAsync();
            var listLike = await _cvLikeEntityRepository.GetAllListAsync();
            foreach(var cv in allCV)
            {
               var obj = ObjectMapper.Map<CVEntityLikeResult>(cv);
                obj.TotalLike = listLike.Count(p => p.CVId == obj.Id);
                if (listLike.FirstOrDefault(p => p.UserId == userId && p.CVId == obj.Id) == null)
                {
                    obj.IsLike = false;
                }
                else obj.IsLike = true;
                result.Add(obj);
            }
            return result;
        }

        public async Task<CVEntityResult> GetDetailCVByCVId(int id)
        {
            var result = new CVEntityResult();
            var cvEntity = _cvEntityRepository.GetAllIncluding(p => p.CVTemplateEntity).Where(p => p.Id == id).FirstOrDefault();
            if (cvEntity == null)
            {
                throw new Exception("CV doesn't exist!");
            }
            else
            {
                result = ObjectMapper.Map<CVEntityResult>(cvEntity);
                result.ListEducations = await _educationEntityRepository.GetAllListAsync(p => p.CVId == id);
                result.ListSkills = await _skillEntityRepository.GetAllListAsync(p => p.CVId == id);
                result.ListCertificates = await _certificateEntityRepository.GetAllListAsync(p => p.CVId == id);
                result.ListExperiences = await _experienceEntityRepository.GetAllListAsync(p => p.CVId == id);
                result.ListHobbies = await _hobbyEntityRepository.GetAllListAsync(p => p.CVId == id);
            }

            return result;
        }
    }
}
