using System.ComponentModel.DataAnnotations;
namespace BigBangProject.Authentication
{
    public class RegistrationModel
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        [Key]
        public string Username { get; set; }=string.Empty;
        [Required]
        public string Roles { get; set; }=string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
