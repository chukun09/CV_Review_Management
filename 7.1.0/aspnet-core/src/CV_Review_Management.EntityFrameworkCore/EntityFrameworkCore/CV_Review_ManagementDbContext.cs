using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CV_Review_Management.Authorization.Roles;
using CV_Review_Management.Authorization.Users;
using CV_Review_Management.MultiTenancy;

namespace CV_Review_Management.EntityFrameworkCore
{
    public class CV_Review_ManagementDbContext : AbpZeroDbContext<Tenant, Role, User, CV_Review_ManagementDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public CV_Review_ManagementDbContext(DbContextOptions<CV_Review_ManagementDbContext> options)
            : base(options)
        {
        }
    }
}
