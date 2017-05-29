using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Xamarin.Forms;

[assembly: Dependency(typeof(XamarinApp.Droid.Authenticator))]
namespace XamarinApp.Droid
{
  class Authenticator : IAuthenticator
  {
    private AuthenticationContext authContext = null;
    private string resource = "";
    private string clientId = "";
    private string returnUri = "";

    public async Task<String> Authenticate(string authority, string _resource, string _clientId, string _returnUri)
    { 
      resource = _resource;
      clientId = _clientId;
      returnUri = _returnUri;
      try
      {
        LoggerCallbackHandler.Callback = new MyLogger();
        authContext = new AuthenticationContext(authority);
        if (authContext.TokenCache.ReadItems().Any())
          authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);
        var authResult = await authContext.AcquireTokenAsync(resource, clientId, new Uri(returnUri), new PlatformParameters((Activity)Forms.Context));
        return authResult.AccessToken;
      }
      catch (Exception)
      {
        throw;
      }
    }

    public async Task<string> GetAccessToken()
    {
      if (authContext == null) return "";
      if (authContext.TokenCache.ReadItems().Any())
        authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);
      try
      {
        var authResult = await authContext.AcquireTokenSilentAsync(resource, clientId);
        XamarinApp.Droid.MainActivity.Instance.RunOnUiThread(() =>
        {
          (Xamarin.Forms.Application.Current.MainPage as HybridWebViewPage).InvokeEvent("resume");
        });
        return authResult.AccessToken;
      }
      catch (Exception)
      {
        return "";
      }
    }

    public bool Logout()
    {
      if (authContext.TokenCache.ReadItems().Any())
        authContext = new AuthenticationContext(authContext.TokenCache.ReadItems().First().Authority);
      authContext.TokenCache.Clear();
      return true;
    }
  }

  public class MyLogger : IAdalLogCallback
  {
    public void Log(LogLevel level, string message)
    {
      System.Diagnostics.Debug.WriteLine("******************************************" + level.ToString() + ":" + message);
    }
  }
}