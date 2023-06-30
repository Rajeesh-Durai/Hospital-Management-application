using BigBangProject.Models;
using BigBangProject.Repository.AppointmentService;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BigBangProject.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("Appointment")]
    [ApiController]
    public class AppointmentController:ControllerBase
    {
        private readonly IAppointmentServices _context;
        public AppointmentController(IAppointmentServices context)
        {
            _context= context;
        }
        [HttpGet]
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
