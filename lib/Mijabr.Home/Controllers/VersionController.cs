using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace Mijabr.Home.Controllers
{
    [Produces("application/json")]
    [Route("home/api/Version")]
    public class VersionController : Controller
    {
        [HttpPost]
        public dynamic Version()
        {
            return new { Version = Assembly.GetExecutingAssembly().GetCustomAttribute<AssemblyFileVersionAttribute>().Version };
        }
    }
}
