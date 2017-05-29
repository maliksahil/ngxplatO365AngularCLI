using System;
using Android.Webkit;
using XamarinApp.Droid;
using Java.Interop;
using Xamarin.Forms;
using System.Threading.Tasks;

namespace XamarinApp.Droid
{
  public class JSBridge : Java.Lang.Object
  {
    readonly WeakReference<HybridWebViewRenderer> hybridWebViewRenderer;

    public JSBridge(HybridWebViewRenderer hybridRenderer)
    {
      hybridWebViewRenderer = new WeakReference<HybridWebViewRenderer>(hybridRenderer);
    }

    [JavascriptInterface]
    [Export("invokeAction")]
    public string InvokeAction(string data)
    {
      HybridWebViewRenderer hybridRenderer;
      var parameters = new DeconstructedParameters(data);
      if (hybridWebViewRenderer != null && hybridWebViewRenderer.TryGetTarget(out hybridRenderer))
      {
        return hybridRenderer.Element.InvokeAction(parameters, GetUserFolder());
      }
      else return "";
    }

    private string GetUserFolder()
    {
      string folder = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
      return folder;
    }
  }
}