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
        [Authorize(Roles = "Admin")]
        [HttpGet("DoctorDetail")]
        public async Task<ActionResult<List<DoctorDetails>>> doctorDetail()
        {
            try
            {
                var get = await _context.doctorDetail();
                return Ok(get);
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
       
        [Authorize(Roles = "Admin,User,Doctor")]
      
        [HttpGet("Cardiology")]
        public async Task<ActionResult<List<DoctorDetails>>> cardiology()
        {
            try
            {
                var details = await _context.cardiology();
                return Ok(details);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }

        }
        [Authorize(Roles = "Admin,User,Doctor")]
        [HttpGet("Endocrinology")]
        public async Task<ActionResult<List<DoctorDetails>>> endocrinology()
        {
            try
            {
                var details = await _context.endocrinology();
                return Ok(details);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }

        }
        [Authorize(Roles ="Admin,User,Doctor")]
        [HttpGet("Neurology")]
        public async Task<ActionResult<List<DoctorDetails>>> neurology()
        {
            try
            {
                var details = await _context.neurology();
                return Ok(details);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }

        }
        [Authorize(Roles = "Admin,User,Doctor")]
        
        [HttpGet("Nephrology")]
        public async Task<ActionResult<List<DoctorDetails>>> nephrology()
        {
            try
            {
                var details = await _context.nephrology();
                return Ok(details);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }

        }
        [Authorize(Roles = "Admin")]
        [HttpGet("Orthopedics")]
        public async Task<ActionResult<List<DoctorDetails>>> orthopedics()
        {
            try
            {
                var details = await _context.orthopedics();
                return Ok(details);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);

            }

        }
    }
}
