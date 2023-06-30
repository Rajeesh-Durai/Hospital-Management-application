using BigBangProject.Authentication;
using BigBangProject.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBangProject.Data
{
    public class HospitalContext:DbContext
    {
        public HospitalContext(DbContextOptions options):base(options) 
        {

        }
        public DbSet<DoctorDetails> DoctorDetails { get; set; }
        public DbSet<AppointmentDetails> Appointments { get; set; }

    }
}
