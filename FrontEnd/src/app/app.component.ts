import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';
import { DoctorAppointmentService } from './service/doctor-appointment.service';
import { RequestDoctorDataService } from './service/request-doctor-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HospitalManagement';
  roles = '';
  projLogo: string = 'assets/images/project-logo.jpg';
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private route: Router,
    private user: RequestDoctorDataService
  ) {}
  public photo: any;
  role: string = localStorage.getItem('role') || '';

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    sessionStorage.removeItem('docName');
    sessionStorage.removeItem('Name');
    this.route.navigate(['']).then(() => {
      // Optional: Scroll to the top of the page
      window.scrollTo(0, 0);
      location.reload();
    });
  }
}
