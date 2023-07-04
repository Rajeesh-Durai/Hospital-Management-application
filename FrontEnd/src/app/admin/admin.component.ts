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
    this.apiService.DisplayDoctorProfile().subscribe((res) => {
      this.requestDataList = res;
    });
    this.AllDetailfn();
  }
  //add to Register table and deleting it in profile table
  Add(user: any): void {
    this.api.signup(user).subscribe({
      next: (res) => {
        console.log(user);
      },
    });
    this.removeItem(user.username);
  }
  //remove single item
  removeItem(user: any) {
    this.apiService.deleteByName(user).subscribe((res) => {
      console.log('Deleted');
    });
    window.location.reload();
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
}
