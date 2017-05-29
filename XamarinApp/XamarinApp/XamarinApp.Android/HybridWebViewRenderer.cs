using Android.Webkit;
using XamarinApp;
using XamarinApp.Droid;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;
using Android.Views;

[assembly: ExportRenderer(typeof(HybridWebView), typeof(HybridWebViewRenderer))]
namespace XamarinApp.Droid
{
  public class HybridWebViewRenderer : ViewRenderer<HybridWebView, Android.Webkit.WebView>
  {
    const string JavaScriptFunction = @"
    var isXamarin = true; 
    isCordova = false;
    function invokeXamarinAction(data){
      return new Promise((resolve, reject) => {
        var x = jsBridge.invokeAction(data);
        resolve(x); 
      });
    }

    var resumeEvent = new Event('resume');
    ";

    protected override void OnElementChanged(ElementChangedEventArgs<HybridWebView> e)
    {
      base.OnElementChanged(e);

      if (Control == null)
      {
        var webView = new Android.Webkit.WebView(Forms.Context);
        webView.Settings.JavaScriptEnabled = true;
        webView.Settings.AllowFileAccessFromFileURLs = true;
        webView.Settings.AllowUniversalAccessFromFileURLs = true;
        webView.Settings.AllowContentAccess = true;
        webView.Settings.AllowFileAccess = true;
        webView.Settings.DomStorageEnabled = true;
        webView.Settings.DatabaseEnabled = true;
        SetNativeControl(webView);
      }
      if (e.OldElement != null)
      {
        Control.RemoveJavascriptInterface("jsBridge");
        var hybridWebView = e.OldElement as HybridWebView;
        hybridWebView.Cleanup();
      }
      if (e.NewElement != null)
      {
        Control.Settings.DomStorageEnabled = true;
        Control.Settings.DatabaseEnabled = true;
        Control.Settings.JavaScriptEnabled = true;
        Control.Settings.AllowContentAccess = true;
        Control.Settings.AllowUniversalAccessFromFileURLs = true;
        Control.Settings.AllowFileAccess = true;
        Control.Settings.AllowFileAccessFromFileURLs = true;
        Control.AddJavascriptInterface(new JSBridge(this), "jsBridge");
        Control.LoadUrl(string.Format("file:///android_asset/{0}", Element.Uri));
        InjectJS(JavaScriptFunction);
        (e.NewElement as HybridWebView).NativeEvent += HybridWebViewRenderer_NativeEvent;
      }
    }

    private void HybridWebViewRenderer_NativeEvent(object sender, System.EventArgs e)
    {
      string eventType = sender.ToString();
      Control.EvaluateJavascript("document.dispatchEvent(" + eventType + "Event);", null);
    }
    
    void InjectJS(string script)
    {
      if (Control != null)
      {
        Control.LoadUrl(string.Format("javascript: {0}", script));
      }
    }
  }
}