using System.ComponentModel.DataAnnotations;
namespace BigBangProject.Authentication
{
    public class LoginModel
    {
        [Required]
        public string? Username { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
