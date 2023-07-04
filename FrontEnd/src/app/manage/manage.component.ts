import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { doctorAppointmentDTO } from '../models/doctorAppointmentDTO';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  constructor(
    private rout: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private appointment: DoctorAppointmentService
  ) {}
  public patient: any;
  public name: any;
  ngOnInit(): void {
    const saved = localStorage.getItem('name');
    if (saved) {
      this.name = saved;
      console.log(this.name);
      this.apiService.appointmentDetail(this.name).subscribe((result) => {
        this.patient = result;
        console.log(this.patient);
        console.log('done');
      });
    }
  }
}
