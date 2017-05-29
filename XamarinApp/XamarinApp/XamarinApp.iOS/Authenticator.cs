using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UIKit;

using Xamarin.Forms;

[assembly: Dependency(typeof(XamarinApp.iOS.Authenticator))]
namespace XamarinApp.iOS
{
  class Authenticator : IAuthenticator
  {
    private AuthenticationContext authContext = null;
    private string resource = "";
    private string clientId = "";
    private string returnUri = "";

    public async Task<string> Authenticate(string authority, string _resource, string _clientId, string _returnUri)
    {
      resource = _resource;
      clientId = _clientId;
      returnUri = _returnUri;
      authority = "https://login.windows.net/common";

      authContext = new AuthenticationContext(authority);
      if (authContext.TokenCache.ReadItems().Any())
        authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);

      var controller = UIApplication.SharedApplication.KeyWindow.RootViewController;
      var uri = new Uri(returnUri);
      var platformParams = new PlatformParameters(controller);
      var authResult = await authContext.AcquireTokenAsync(resource, clientId, uri, platformParams);      
      return authResult.AccessToken;
    }

    public async Task<string> GetAccessToken()
    {
      if (authContext == null) return "";
      if (authContext.TokenCache.ReadItems().Any())
        authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);
      var controller = UIApplication.SharedApplication.KeyWindow.RootViewController;
      var uri = new Uri(returnUri);
      var platformParams = new PlatformParameters(controller);
      var authResult = await authContext.AcquireTokenAsync(resource, clientId, uri, platformParams);
      (Xamarin.Forms.Application.Current.MainPage as HybridWebViewPage).InvokeEvent("resume");
      return authResult.AccessToken;            
    }

    public bool Logout()
    {
      if (authContext.TokenCache.ReadItems().Any())
        authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);
      authContext.TokenCache.Clear();
      return true;
    }
  }
}
