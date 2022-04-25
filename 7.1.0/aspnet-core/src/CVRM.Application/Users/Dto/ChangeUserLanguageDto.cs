using System.ComponentModel.DataAnnotations;

namespace CVRM.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}