using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CVRM.Migrations
{
    public partial class Fix_Table_pdf_cv : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_cv_pdf_user_cv_cVEntityId",
                table: "cv_pdf");

            migrationBuilder.DropIndex(
                name: "IX_cv_pdf_cVEntityId",
                table: "cv_pdf");

            migrationBuilder.DropColumn(
                name: "cVEntityId",
                table: "cv_pdf");

            migrationBuilder.CreateIndex(
                name: "IX_cv_pdf_CVId",
                table: "cv_pdf",
                column: "CVId");

            migrationBuilder.AddForeignKey(
                name: "FK_cv_pdf_user_cv_CVId",
                table: "cv_pdf",
                column: "CVId",
                principalTable: "user_cv",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_cv_pdf_user_cv_CVId",
                table: "cv_pdf");

            migrationBuilder.DropIndex(
                name: "IX_cv_pdf_CVId",
                table: "cv_pdf");

            migrationBuilder.AddColumn<int>(
                name: "cVEntityId",
                table: "cv_pdf",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_cv_pdf_cVEntityId",
                table: "cv_pdf",
                column: "cVEntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_cv_pdf_user_cv_cVEntityId",
                table: "cv_pdf",
                column: "cVEntityId",
                principalTable: "user_cv",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
