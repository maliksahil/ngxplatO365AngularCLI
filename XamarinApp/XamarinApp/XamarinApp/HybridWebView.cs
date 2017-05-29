using System;
using System.Net;
using Xamarin.Forms;

namespace XamarinApp
{
  public class HybridWebView : View
  {
    Action<FunctionParameters> action;
    public event EventHandler NativeEvent;

    public static readonly BindableProperty UriProperty = BindableProperty.Create(
        propertyName: "Uri",
        returnType: typeof(string),
        declaringType: typeof(HybridWebView),
        defaultValue: default(string));

    public void InvokeEvent(string eventName)
    {
      if (this.NativeEvent != null) this.NativeEvent(eventName, new EventArgs());
    }

    public string Uri
    {
      get { return (string)GetValue(UriProperty); }
      set { SetValue(UriProperty, value); }
    }

    public void RegisterAction(Action<FunctionParameters> callback)
    {
      action = callback;
    }

    public void Cleanup()
    {
      action = null;
    }

    public string InvokeAction(DeconstructedParameters data, string userFolder)
    {
      if (action == null || data == null)
      {
        return "";
      }
      var parameters = new FunctionParameters() { Input = data, UserFolder = userFolder };
      action.Invoke(parameters); 
      return parameters.Output;
    }
  }

  public class FunctionParameters
  {
    public DeconstructedParameters Input { get; set; }
    public string Output { get; set; }
    public string UserFolder { get; set; }
  }
}
