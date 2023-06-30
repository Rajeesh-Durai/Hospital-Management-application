using BigBangProject.Models;
using BigBangProject.Repository.DoctorService;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace BigBangProject.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("Doctor")]
    [ApiController]
    public class DoctorController:ControllerBase
    {
        private readonly IDoctorServices _context;
        public DoctorController(IDoctorServices context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<DoctorDetails>>> GetDoctorDetails()
        {
            try
            {
                var get = await _context.GetDoctorDetails();
                return Ok(get);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);

            }

        }
    }
}
