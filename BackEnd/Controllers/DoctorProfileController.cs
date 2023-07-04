using BigBangProject.Models;
using BigBangProject.Repository.DoctorProfileService;
using BigBangProject.Repository.DoctorService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace BigBangProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorProfileController:ControllerBase
    {
        private readonly IDoctorProfileService _context;
        public DoctorProfileController(IDoctorProfileService context)
        {
            _context = context;
        }
        [HttpGet("DoctorProfile")]
        public async Task<ActionResult<List<DoctorProfile>>> doctorProfile()
        {
            try
            {
                var get = await _context.doctorProfile();
                return Ok(get);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("NewDoctorInfo")]
        public async Task<ActionResult<DoctorProfile>> AddDoctorProfile(DoctorProfile doctor)
        {
            try
            {
                var add = await _context.AddDoctorProfile(doctor);
                return Ok(add);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);

            }
        }
        [HttpDelete("DeleteDoctorProfile")]
        public async Task<ActionResult<DoctorProfile>> DeleteDoctorProfile(string id)
        {
            try
            {
                var delete = await _context.DeleteDoctorProfile(id);
                return Ok(delete);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
