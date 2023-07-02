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
        public async Task<List<AppointmentDetails>> GetAppointmentDetails(string name)
        {
            var item = await (from appt in _context.Appointments
                              join doc in _context.DoctorDetails on appt.DoctorDetailsId equals doc.Id
                              where doc.DoctorName == name
                              select appt
                ).ToListAsync();
            if (item == null)
            {
                throw new ArgumentNullException("No Appointment For You");
            }
            return item;
        }
        public async Task<AppointmentDetails> FillAppointmentDetails(AppointmentDetails appointment)
        {
             await _context.Appointments.AddAsync(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }
    }
}
