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
        public async Task<List<DoctorDetails>> doctorDetail()
        {
            var doctorInfo = await _context.DoctorDetails.ToListAsync();
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
        public async Task<List<DoctorDetails>> cardiology()
        {
            var items = await _context.DoctorDetails.Where(val => val.Specialization == "Cardiology").ToListAsync();
            return items;
        }
        public async Task<List<DoctorDetails>> endocrinology()
        {
            var items = await _context.DoctorDetails.Where(val => val.Specialization == "Endocrinology").ToListAsync();
            return items;
        }
        public async Task<List<DoctorDetails>> orthopedics()
        {
            var items = await _context.DoctorDetails.Where(val => val.Specialization == "Orthopedics").ToListAsync();
            return items;
        }
        public async Task<List<DoctorDetails>> nephrology()
        {
            var items = await _context.DoctorDetails.Where(val => val.Specialization == "Nephrology").ToListAsync();
            return items;
        }
        public async Task<List<DoctorDetails>> neurology()
        {
            var items = await _context.DoctorDetails.Where(val => val.Specialization == "Neurology").ToListAsync();
            return items;
        }
    }
}
