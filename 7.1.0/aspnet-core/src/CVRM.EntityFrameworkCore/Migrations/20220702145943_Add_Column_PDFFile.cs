using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CVRM.Migrations
{
    public partial class Add_Column_PDFFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Activities",
                table: "cv_education");

            migrationBuilder.DropColumn(
                name: "Degree",
                table: "cv_education");

            migrationBuilder.AddColumn<string>(
                name: "PDFFile",
                table: "user_cv",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PDFFile",
                table: "user_cv");

            migrationBuilder.AddColumn<string>(
                name: "Activities",
                table: "cv_education",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Degree",
                table: "cv_education",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
