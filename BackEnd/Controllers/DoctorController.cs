using BigBangProject.Models;
using BigBangProject.Repository.DoctorService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BigBangProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController:ControllerBase
    {
        private readonly IDoctorServices _context;
        public DoctorController(IDoctorServices context)
        {
            _context = context;
        }
        [Authorize(Roles ="User")]
        [HttpGet("DoctorDetails")]
        public async Task<ActionResult<List<DoctorDetails>>> GetDoctorDetails()
        {
            try
            {
                var gets = await _context.GetDoctorDetails();
                return Ok(gets);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);

            }

        }
        [Authorize(Roles ="Admin")]
        [HttpPost("NewDoctorInfo")]
        public async Task<ActionResult<DoctorDetails>> NewDoctorInfo(DoctorDetails doctor)
        {
            try
            {
                var add = await _context.NewDoctorInfo(doctor);
                return Ok(add);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);

            }
        }
        [Authorize(Roles = "Doctor")]
        [HttpPut("UpdateDoctorInfo")]
        public async Task<ActionResult<List<DoctorDetails>>> UpdateDoctorInfo(int id, DoctorDetails doctor)
        {
            try
            {
                var update = await _context.UpdateDoctorInfo(id,doctor);
                return Ok(update);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);

            }
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("DeleteDoctorInfo")]
        public async Task<ActionResult<string>> DeleteDoctorInfo(int id)
        {
            try
            {
                var delete = await _context.DeleteDoctorInfo(id);
                return Ok(delete);
            }
            catch(ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
