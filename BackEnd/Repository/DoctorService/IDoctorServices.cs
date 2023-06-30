using BigBangProject.Models;

namespace BigBangProject.Repository.DoctorService
{
    public interface IDoctorServices
    {
        Task<List<DoctorDetails>> GetDoctorDetails();
    }
}
