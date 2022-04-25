using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CVRM.Authorization.Roles;
using CVRM.Authorization.Users;
using CVRM.MultiTenancy;

namespace CVRM.EntityFrameworkCore
{
    public class CVRMDbContext : AbpZeroDbContext<Tenant, Role, User, CVRMDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public CVRMDbContext(DbContextOptions<CVRMDbContext> options)
            : base(options)
        {
        }
    }
}
