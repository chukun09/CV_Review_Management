using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CVRM.Authorization.Roles;
using CVRM.Authorization.Users;
using CVRM.MultiTenancy;
using CVRM.Entites.Users;
using CVRM.Entites;

namespace CVRM.EntityFrameworkCore
{
    public class CVRMDbContext : AbpZeroDbContext<Tenant, Role, User, CVRMDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public virtual DbSet<AddressEntity> AddressEntity { get; set; }
        public virtual DbSet<CertificateEntity> CertificateEntity { get; set; }
        public virtual DbSet<CommentEntity> CommentEntity { get; set; }
        public virtual DbSet<CVEntity> CVEntity { get; set; }
        public virtual DbSet<District> District { get; set; }
        public virtual DbSet<EducationEntity> EducationEntity { get; set; }
        public virtual DbSet<ExperienceEntity> ExperienceEntity { get; set; }
        public virtual DbSet<HobbyEntity> HobbyEntity { get; set; }
        public virtual DbSet<Province> Province { get; set; }
        public virtual DbSet<SkillEntity> SkillEntity { get; set; }
        public virtual DbSet<UserEntity> UserEntity { get; set; }
        public virtual DbSet<PDFEntity> PDFEntity { get; set; }
        public CVRMDbContext(DbContextOptions<CVRMDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserEntity>().HasIndex(p => p.Email).IsUnique(true);
        }
    }
}
