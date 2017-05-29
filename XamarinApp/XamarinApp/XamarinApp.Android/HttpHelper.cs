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

using Xamarin.Forms;
using System.IO;
using Android.Content.Res;

[assembly: Dependency(typeof(XamarinApp.Droid.HttpHelper))]
namespace XamarinApp.Droid
{
  class HttpHelper : IHttpHelper
  {
    public string LoadFile(string filePath)
    {      
      if (!filePath.StartsWith("http"))
      {
        if (filePath.StartsWith(".")) filePath = filePath.Substring(1, filePath.Length - 1);
        if (filePath.StartsWith("/")) filePath = filePath.Substring(1, filePath.Length - 1);
        AssetManager assets = Android.App.Application.Context.Assets;
        using (StreamReader sr = new StreamReader(assets.Open(filePath)))
        {
          var fileContents = sr.ReadToEnd().Trim();
          return fileContents;
        }
      }
      else
      {
        return "";
      }
    }
  }
}