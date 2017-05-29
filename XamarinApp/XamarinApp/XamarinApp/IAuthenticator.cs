using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XamarinApp
{
  public interface IAuthenticator
  {
    Task<String> Authenticate(string authority, string resource, string clientId, string returnUri);
    Task<String> GetAccessToken();
    bool Logout();
  }
}
