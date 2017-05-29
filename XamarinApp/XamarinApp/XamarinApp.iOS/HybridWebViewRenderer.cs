using System.IO;
using XamarinApp;
using XamarinApp.iOS;
using Foundation;
using WebKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;
using System;
using CoreGraphics;
using System.Net;

[assembly: ExportRenderer(typeof(HybridWebView), typeof(HybridWebViewRenderer))]
namespace XamarinApp.iOS
{
  public class HybridWebViewRenderer : ViewRenderer<HybridWebView, WKWebView>, IWKScriptMessageHandler
  {
    const string JavaScriptFunction = @"
    isXamarin = true;
    isCordova = false;
    window.history.replaceState = function (data, title, url) {
      console.log(data);
      console.log(title);
      console.log(url);
    };
    window.history.pushState = function (data, title, url) {
      console.log(data);
      console.log(title);
      console.log(url);
    };
    window.id = 1;
    window.handlers = {};
    window.Resolver = function () {
      this.resolve = function () { },
        this.reject = function () { },
        this.resolveMessage = function (data) {
          this.resolve(data);
        }
    };

    function invokeXamarinAction(data) {
      return new Promise((resolve, reject) => {
        var handle = 'm' + this.id++;
        window.handlers[handle] = new Resolver();
        window.handlers[handle].resolve = resolve;
        window.handlers[handle].reject = reject;
        window.webkit.messageHandlers.invokeNativeCode.postMessage({ data: data, id: handle });
      });
    }

    var resumeEvent = new Event('resume');
    ";

    WKUserContentController userController;

    protected override void OnElementChanged(ElementChangedEventArgs<HybridWebView> e)
    {
      if (Control == null)
      {
        userController = new WKUserContentController();
        var script = new WKUserScript(new NSString(JavaScriptFunction), WKUserScriptInjectionTime.AtDocumentStart, false);
        userController.AddUserScript(script);
        userController.AddScriptMessageHandler(this, "invokeNativeCode");

        var config = new WKWebViewConfiguration { UserContentController = userController };
        var webView = new WKWebView(Frame, config);

        SetNativeControl(webView);
      }
      if (e.OldElement != null)
      {
        userController.RemoveAllUserScripts();
        userController.RemoveScriptMessageHandler("invokeNativeCode");
        var hybridWebView = e.OldElement as HybridWebView;
        hybridWebView.Cleanup();
      }
      if (e.NewElement != null)
      {
        string fileName = Path.Combine(NSBundle.MainBundle.BundlePath, string.Format("Content/{0}", Element.Uri));
        Control.LoadRequest(new NSUrlRequest(new NSUrl(fileName, false)));
        (e.NewElement as HybridWebView).NativeEvent += HybridWebViewRenderer_NativeEvent;
        //var fileContents = File.ReadAllText(fileName);
        //Control.LoadHtmlString(fileContents, new NSUrl(NSBundle.MainBundle.BundlePath + "/Content", true));
      }
    }

    private void HybridWebViewRenderer_NativeEvent(object sender, EventArgs e)
    {
      string eventType = sender.ToString();
      Control.EvaluateJavaScript("document.dispatchEvent(" + eventType + "Event);", null);
    }

    public void DidReceiveScriptMessage(WKUserContentController userContentController, WKScriptMessage message)
    {
      var parameters = new DeconstructedParameters(message.Body.ValueForKey(new NSString("data")).ToString());
      var handler = message.Body.ValueForKey(new NSString("id")).ToString();
      var returnValue = Element.InvokeAction(parameters, GetUserFolder());
      if (returnValue == null) returnValue = "";
      returnValue = returnValue.Replace("\r", "").Replace("\n", "");
      Control.EvaluateJavaScript("window.handlers['" + handler + "'].resolveMessage('" + returnValue + "');", new WKJavascriptEvaluationResult((o, e) => { }));
    }

    private string GetUserFolder()
    {
      string folder = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
      folder = Path.Combine(folder, "..", "Library");
      return folder;
    }
  }
}
