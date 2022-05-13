using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using CVRM.CVRM.User;
using CVRM.CVRM.User.Dto;
using CVRM.Entites;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVRM.CVRM.UserManagement
{
    public class UserEntityAppService : AsyncCrudAppService<
         UserEntity,
         UserEntityDto,
         int,
         PagedAndSortedResultRequestDto,
         CreateUpdateUserDto>, IUserEntityAppService
    {
        private readonly IRepository<UserEntity> _iUserEntityRepository;
        public UserEntityAppService(IRepository<UserEntity, int> repository,
            IRepository<UserEntity> iUserEntityRepository) : base(repository)
        {
            _iUserEntityRepository = iUserEntityRepository;
        }

        public async Task<UserEntityDto> GetUserEntityByUserIdAsync(int id)
        {
            var userEntity = await _iUserEntityRepository.FirstOrDefaultAsync(p => p.UserId == id);
            return ObjectMapper.Map<UserEntityDto>(userEntity);
        }
    }
}
