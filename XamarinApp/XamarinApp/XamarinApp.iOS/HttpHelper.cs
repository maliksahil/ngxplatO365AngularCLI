using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Foundation;
using UIKit;
using Xamarin.Forms;
using System.IO;

[assembly: Dependency(typeof(XamarinApp.iOS.HttpHelper))]
namespace XamarinApp.iOS
{
  class HttpHelper : IHttpHelper
  {
    public string LoadFile(string filePath)
    {
      if (!filePath.StartsWith("http"))
      {
        if (filePath.StartsWith(".")) filePath = filePath.Substring(1, filePath.Length - 1);
        string fileName = Path.Combine(NSBundle.MainBundle.BundlePath, string.Format("Content/{0}", filePath));
        var fileContents = File.ReadAllText(fileName);
        return fileContents.Trim();
      }
      else
      {
        return "";
      }
    }
  }
}