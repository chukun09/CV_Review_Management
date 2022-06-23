﻿using Abp.Domain.Repositories;
using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CVRM.Entites;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore.Repositories;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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
            foreach (var cv in allCV)
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
        [UnitOfWork]
        public async Task<bool> CreateNewCVAndAllInformation(CVEntityAllInformationsInput input)
        {
            var cvEntity = ObjectMapper.Map<CVEntity>(input);
            if (cvEntity != null)
            {
                var avatarObject = uploadImage(input.Avatar);
                if (avatarObject != null)
                {
                    cvEntity.Avatar = avatarObject.Result;
                }
                var idCV = await _cvEntityRepository.InsertAndGetIdAsync(cvEntity);
                if (input.ListEducations != null)
                {
                    if (input.ListEducations.Count != 0)
                    {
                        input.ListEducations.ForEach(x => x.CVId = idCV);
                        await _educationEntityRepository.GetDbContext().AddRangeAsync(ObjectMapper.Map<List<EducationEntity>>(input.ListEducations));
                    };
                }
                if (input.ListSkills != null)
                {
                    if (input.ListSkills.Count != 0)
                    {
                        input.ListSkills.ForEach(x => x.CVId = idCV);
                        await _skillEntityRepository.GetDbContext().AddRangeAsync(ObjectMapper.Map<List<SkillEntity>>(input.ListSkills));
                    };
                }
                if (input.ListCertificates != null)
                {
                    if (input.ListCertificates.Count != 0)
                    {
                        input.ListCertificates.ForEach(x => x.CVId = idCV);
                        await _certificateEntityRepository.GetDbContext().AddRangeAsync(ObjectMapper.Map<List<CertificateEntity>>(input.ListCertificates));
                    };
                }
                if (input.ListExperiences != null)
                {
                    if (input.ListExperiences.Count != 0)
                    {
                        input.ListExperiences.ForEach(x => x.CVId = idCV);
                        await _experienceEntityRepository.GetDbContext().AddRangeAsync(ObjectMapper.Map<List<ExperienceEntity>>(input.ListExperiences));
                    }
                }
                if (input.ListHobbies != null)
                {
                    if (input.ListHobbies.Count != 0)
                    {
                        input.ListHobbies.ForEach(x => x.CVId = idCV);
                        await _educationEntityRepository.GetDbContext().AddRangeAsync(ObjectMapper.Map<List<HobbyEntity>>(input.ListHobbies));
                    }
                }
                return true;
            }
            return false;
        }
        public async Task<string> uploadImage(string input)
        {
            HttpClient client = new HttpClient();
            input = input.Split("base64,").Last();
            //var data = "{" +
            //        "\"image\": \"" + input + "\"" +
            //        "}";
            var formVariables = new List<KeyValuePair<string, string>>();
            formVariables.Add(new KeyValuePair<string, string>("image", input));
            var formContent = new FormUrlEncodedContent(formVariables);
            //var content = new StringContent(daformContentta, Encoding.UTF8, "application/x-www-form-urlencoded");
            var response = await client.PostAsync("https://api.imgbb.com/1/upload?key=e7be8b9b1a748dffe6515478ac88a22f", formContent);
            var result = await response.Content.ReadAsStringAsync();
            var avatarObject = JsonConvert.DeserializeObject(result.ToString());
            var avatarPath = (JObject)avatarObject;
            var path = avatarPath["data"].SelectToken("url").ToString();
            return path;
        }
    }
}
