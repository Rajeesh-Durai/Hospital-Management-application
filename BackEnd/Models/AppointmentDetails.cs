using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace BigBangProject.Models
{
    public class AppointmentDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [ForeignKey("DoctorDetails")]
        public int DoctorDetailsId { get; set; }
        [Required]
        public string PatientName { get; set; }=string.Empty;
        [Required]
        public int PatientAge { get; set; }

        [Required]
        [Column(TypeName ="Date")]
        public DateTime AppointmentDate { get; set; }

        [Required]
        public string? AppointmentTime { get; set; }
    }
}
