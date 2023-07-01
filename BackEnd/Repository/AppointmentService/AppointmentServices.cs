using BigBangProject.Data;
using BigBangProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BigBangProject.Repository.AppointmentService
{
    public class AppointmentServices:IAppointmentServices
    {
        private readonly HospitalContext _context;
        public AppointmentServices(HospitalContext context)
        {
            _context = context;
        }
        public async Task<List<AppointmentDetails>> GetAppointmentDetails()
        {
            var appointmentInfo = await _context.Appointments.ToListAsync();
            if (appointmentInfo == null)
            {
                throw new ArgumentNullException("No info available");

            }
            return appointmentInfo;
        }
        public async Task<AppointmentDetails> FillAppointmentDetails(AppointmentDetails appointment)
        {
             await _context.Appointments.AddAsync(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }
    }
}
