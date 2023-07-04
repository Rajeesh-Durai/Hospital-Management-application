using BigBangProject.Models;

namespace BigBangProject.Repository.DoctorProfileService
{
    public interface IDoctorProfileService
    {
        Task<List<DoctorProfile>> doctorProfile();
        Task<DoctorProfile> AddDoctorProfile(DoctorProfile doctor);
        Task<DoctorProfile> DeleteDoctorProfile(string id);
    }
}
