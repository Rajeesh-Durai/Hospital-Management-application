using BigBangProject.Models;

namespace BigBangProject.Repository.DoctorService
{
    public interface IDoctorServices
    {
        Task<List<DoctorDetails>> GetDoctorDetails();
        Task<DoctorDetails> NewDoctorInfo(DoctorDetails doctor);
        Task<List<DoctorDetails>> UpdateDoctorInfo(int id, DoctorDetails doctor);
        Task<string> DeleteDoctorInfo(int id);
    }
}
