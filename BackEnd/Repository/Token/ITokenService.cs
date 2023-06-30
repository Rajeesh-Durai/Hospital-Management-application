using System.Security.Claims;
using BigBangProject.Authentication;

namespace BigBangProject.Repository.Token
{
    public interface ITokenService
    {
        TokenResponse GetToken(IEnumerable<Claim> claim);
        string GetRefreshToken();
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
