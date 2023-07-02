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

  ngOnInit(): void {
    this.appointment.getDetail().subscribe((res) => {
      this.docAppointment = res;
      console.log(this.docAppointment);
      this.arraylength = this.docAppointment.length;
      this.name = this.docAppointment[this.arraylength - 1]?.username || '';
      console.log(this.name);
      this.apiService.appointmentDetail(this.name).subscribe((result) => {
        this.patient = result;
        console.log(this.patient);
        console.log('done');
      });
    });
  }
  public patient: any;
  public docAppointment: any[] = [];
  public arraylength!: number;
  public name: any;
}
