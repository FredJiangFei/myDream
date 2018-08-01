using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PowerOfDream.Models
{
  public class IndexModel : PageModel
  {
    public string Message { get; private set; } = "PageModel in C#";

    public void OnGet()
    {
      Message += $" Server time is { DateTime.Now }";
    }
  }
}
