using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace CV_Review_Management.EntityFrameworkCore
{
    public static class CV_Review_ManagementDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<CV_Review_ManagementDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<CV_Review_ManagementDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
