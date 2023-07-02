using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BigBangProject.Models
{
    public class DoctorDetails

    {
    [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

    [Required]
    public string DoctorName { get; set; } = string.Empty;

    [Required]
    public string Specialization { get; set; } = string.Empty;

        [Required]
        public int Experience { get; set; }
    public ICollection<AppointmentDetails>? Appointments { get; set; }
}
}
