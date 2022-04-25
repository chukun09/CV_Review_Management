using System.ComponentModel.DataAnnotations;

namespace CV_Review_Management.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}