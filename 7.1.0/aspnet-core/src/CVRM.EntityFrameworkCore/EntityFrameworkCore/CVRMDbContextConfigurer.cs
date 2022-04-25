using System;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace CVRM.EntityFrameworkCore
{
    public static class CVRMDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<CVRMDbContext> builder, string connectionString)
        {
            builder.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 11)));
        }

        public static void Configure(DbContextOptionsBuilder<CVRMDbContext> builder, DbConnection connection)
        {
            builder.UseMySql(connection, new MySqlServerVersion(new Version(8, 0, 11)));
        }
    }
}
