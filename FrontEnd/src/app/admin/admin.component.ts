import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { RequestDoctorDataService } from '../service/request-doctor-data.service';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  public requestDataList: any = [];

  constructor(
    private reqService: RequestDoctorDataService,
    private rout: Router,
    private api: SignupService,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reqService.getDetail().subscribe((res) => {
      this.requestDataList = res;
    });
    this.AllDetailfn();
  }
  //add to user table
  Add(doctor: any): void {
    this.api.signup(doctor).subscribe((res) => {
      console.log(res);
    });
    this.removeItem(doctor);
  }
  //remove single item
  removeItem(doctor: any) {
    this.reqService.removeRequestData(doctor);
  }
  roles = '';
  isLoggedIn!: boolean;

  checkLoggedInUser() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.roles = this.authService.getUserRole();
  }
  //api part
  //To display all the data from the database
  public Doctor: any;

  private AllDetailfn(): void {
    this.apiService.doctorDetail().subscribe((result) => {
      this.Doctor = result;
      console.log('done');
    });
  }
  logout() {
    this.authService.logout();
  }
}
