using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Mijabr.Home.Controllers
{
    [Route("home/api/identity")]
    public class IdentityController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }
    }
}
