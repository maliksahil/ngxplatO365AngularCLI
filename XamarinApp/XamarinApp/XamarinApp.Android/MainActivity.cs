using System;

using Android.App;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Android.Graphics;
using Android.Content;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace XamarinApp.Droid
{
  [Activity(
  Label = "XamarinApp", Icon = "@drawable/icon", Theme = "@style/MainTheme", MainLauncher = true,
  ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
  public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsApplicationActivity
  {
    private XamarinApp.App theApp = null;
    public static MainActivity Instance { get; private set; }

    public MainActivity()
    {
      Instance = this;
    }
    protected override void OnCreate(Bundle bundle)
    {
      base.OnCreate(bundle);

      global::Xamarin.Forms.Forms.Init(this, bundle);
      theApp = new XamarinApp.App();
      LoadApplication(theApp);

      AndroidBug5497WorkaroundForXamarinAndroid.assistActivity(this);
    }

    protected override void OnActivityResult(int requestCode, Result resultCode, Intent data)
    {
      base.OnActivityResult(requestCode, resultCode, data);
      AuthenticationAgentContinuationHelper.SetAuthenticationAgentContinuationEventArgs(requestCode, resultCode, data); ;
      (theApp.MainPage as HybridWebViewPage).InvokeEvent("resume");
    }
  }
}