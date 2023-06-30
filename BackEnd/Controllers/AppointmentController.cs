using BigBangProject.Models;
using BigBangProject.Repository.AppointmentService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BigBangProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController:ControllerBase
    {
        private readonly IAppointmentServices _context;
        public AppointmentController(IAppointmentServices context)
        {
            _context= context;
        }
        [Authorize(Roles ="Doctor")]
        [HttpGet("AppointmentDetail")]
        public async Task<ActionResult<List<AppointmentDetails>>> GetAppointmentDetails()
        {
            try
            {
                var get = await _context.GetAppointmentDetails();
                return Ok(get);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [Authorize(Roles ="User")]
        [HttpPost("FillAppointmentDetails")]
        public async Task<ActionResult<AppointmentDetails>> FillAppointmentDetails(AppointmentDetails appointment)
        {
            try
            {
                var add = await _context.FillAppointmentDetails(appointment);
                return Ok(add);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }
        }
    }
}
