using Microsoft.AspNetCore.Identity;

namespace BigBangProject.Authentication
{
    public class ApplicationUser : IdentityUser
    {
        public string Roles { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }
}
