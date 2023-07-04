import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { doctorAppointmentDTO } from '../models/doctorAppointmentDTO';
import { Status } from '../models/status';
import { AuthService } from '../service/auth.service';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myimg: string = 'assets/images/login.jpg';
  myAvatar: string = 'assets/images/Login-logo.png';
  pageLogo: string = 'assets/images/project-logo.png';

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls; // needed for validation in html file
  }

  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private requestService: DoctorAppointmentService
  ) {}

  onPost() {
    this.status = { statusCode: 0, message: 'wait....' };

    this.signupService.login(this.frm.value).subscribe({
      next: (res) => {
        // save username, accesstoken and refresh token into localStorage
        //Setting the object properties into the localStorage for the further operation
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.roles);
        localStorage.setItem('name', res.username);
        this.status.statusCode = res.statusCode;
        this.status.message = res.message;
        if (res.statusCode == 1) {
          this.router.navigate(['/home']).then(() => {
            // Optional: Scroll to the top of the page
            window.scrollTo(0, 0);
            location.reload();
          });
        }
      },
      error: (err) => {
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = 'some error on server side';
      },
    });
    var request = new doctorAppointmentDTO();
    request = this.frm.value;
    console.log(request);
    this.requestService.addToDTO(request);
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
function calculateFaceMove(e: any) {
  throw new Error('Function not implemented.');
}
