using BigBangProject.Models;

namespace BigBangProject.Repository.DoctorService
{
    public interface IDoctorServices
    {
        Task<List<DoctorDetails>> doctorDetail();
        Task<DoctorDetails> doctorDetailByName(string name);
        Task<DoctorDetails> NewDoctorInfo(DoctorDetails doctor);
        Task<List<DoctorDetails>> UpdateDoctorInfo(int id, DoctorDetails doctor);
        Task<List<DoctorDetails>> UpdateDoctorProfileInfo(string id, DoctorDetails doctor);
        Task<DoctorDetails> DeleteDoctorInfo(int id);
        Task<List<DoctorDetails>> cardiology();
        Task<List<DoctorDetails>> endocrinology();
        Task<List<DoctorDetails>> orthopedics();
        Task<List<DoctorDetails>> nephrology();
        Task<List<DoctorDetails>> neurology();
    }
}
