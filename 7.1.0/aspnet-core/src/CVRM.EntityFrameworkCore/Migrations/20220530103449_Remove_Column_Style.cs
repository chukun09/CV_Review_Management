using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CVRM.Migrations
{
    public partial class Remove_Column_Style : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StyleURL",
                table: "cv_template");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "StyleURL",
                table: "cv_template",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
