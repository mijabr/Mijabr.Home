using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Mijabr.Home.Controllers
{
    [Produces("application/json")]
    [Route("home/api/Version")]
    public class VersionController : Controller
    {
        [HttpPost]
        //[Authorize]
        public dynamic Version()
        {
            return new { Version = Assembly.GetExecutingAssembly().GetCustomAttribute<AssemblyFileVersionAttribute>().Version };
        }
    }
}
