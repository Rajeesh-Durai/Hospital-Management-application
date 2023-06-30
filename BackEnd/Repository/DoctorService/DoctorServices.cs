using BigBangProject.Data;
using BigBangProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BigBangProject.Repository.DoctorService
{
    public class DoctorServices:IDoctorServices
    {
        private readonly HospitalContext _context;
        public DoctorServices(HospitalContext context)
        {
            _context = context;
        }
        public async Task<List<DoctorDetails>> GetDoctorDetails()
        {
            var doctorInfo= await _context.DoctorDetails.ToListAsync();
            if (doctorInfo == null)
            {
                throw new ArgumentNullException("No info available");

            }
            return doctorInfo;
        }
       public async Task<DoctorDetails> NewDoctorInfo(DoctorDetails doctor)
        {
            await _context.DoctorDetails.AddAsync(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }
        public async Task<List<DoctorDetails>> UpdateDoctorInfo(int id, DoctorDetails doctor)
        {
            var update = await _context.DoctorDetails.FindAsync(id);
            if (update == null)
            {
                throw new ArithmeticException("Not available");
            }
            update.DoctorName = doctor.DoctorName;
            update.Specialization = doctor.Specialization;
            update.Experience = doctor.Experience;
            await _context.SaveChangesAsync();
            return await _context.DoctorDetails.ToListAsync();
        }
        public async Task<string> DeleteDoctorInfo(int id)
        {
            var delete = await _context.DoctorDetails.FindAsync(id);
            if (delete == null)
            {
                throw new ArgumentNullException("Not available");
            }
            _context.DoctorDetails.Remove(delete);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";
        }
    }
}
