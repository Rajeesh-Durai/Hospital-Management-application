using BigBangProject.Data;
using BigBangProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

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
    }
}
