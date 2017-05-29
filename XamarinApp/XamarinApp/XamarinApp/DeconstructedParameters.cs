using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XamarinApp
{
  public class DeconstructedParameters
  {
    public DeconstructedParameters() { }
    public DeconstructedParameters(string inputData)
    {
      var deconstructedParameters = Newtonsoft.Json.JsonConvert.DeserializeObject<DeconstructedParameters>(inputData);
      this.Library = deconstructedParameters.Library;
      this.Action = deconstructedParameters.Action;
      this.Parameters = deconstructedParameters.Parameters;
    }

    public string Library { get; set; }
    public string Action { get; set; }
    public Parameter Parameters { get; set; }
  }

  public class Parameter
  {
    public string fileUrl { get; set; }
    public string authority { get; set; }
    public string clientID { get; set; }
    public string resourceUri { get; set; }
    public string returnUri { get; set; }
  }
}
