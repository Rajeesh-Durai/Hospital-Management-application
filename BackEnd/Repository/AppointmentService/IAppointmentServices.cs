using BigBangProject.Models;

namespace BigBangProject.Repository.AppointmentService
{
    public interface IAppointmentServices
    {
        Task<List<AppointmentDetails>> GetAppointmentDetails();
        Task<AppointmentDetails> FillAppointmentDetails(AppointmentDetails appointment);
    }
}
