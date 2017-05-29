using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XamarinApp
{
  public partial class HybridWebViewPage : ContentPage
  {
    public void InvokeEvent(string eventName)
    {
      hybridWebView.InvokeEvent(eventName);
    }

    public HybridWebViewPage()
    {
      InitializeComponent();

      hybridWebView.RegisterAction(async functionParameters =>
      {
        try
        {
          switch (functionParameters.Input.Library)
          {
            case "HttpHelper":
              switch (functionParameters.Input.Action)
              {
                case "LoadFile":
                  functionParameters.Output = DependencyService.Get<IHttpHelper>().LoadFile(functionParameters.Input.Parameters.fileUrl);
                  break;
                default:
                  break;
              }
              break;
            case "Authentication":
              switch (functionParameters.Input.Action)
              {
                case "Login":
                  functionParameters.Output = await DependencyService.Get<IAuthenticator>().Authenticate(
                    functionParameters.Input.Parameters.authority,
                    functionParameters.Input.Parameters.resourceUri,
                    functionParameters.Input.Parameters.clientID,
                    functionParameters.Input.Parameters.returnUri
                    );
                  break;
                case "GetAccessToken":
                  functionParameters.Output = await DependencyService.Get<IAuthenticator>().GetAccessToken();
                  break;
                case "Logout":
                  DependencyService.Get<IAuthenticator>().Logout();
                  break;
                default:
                  break;
              }
              break;
            default:
              break;
          }
        }
        catch (Exception ex)
        {
          functionParameters.Output = ex.ToString();
        }
      });
    }
  }
}
