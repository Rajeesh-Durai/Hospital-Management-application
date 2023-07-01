import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from '../models/status';
import { AuthService } from '../service/auth.service';
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
    private router: Router
  ) {}

  onPost() {
    this.status = { statusCode: 0, message: 'wait....' };

    this.signupService.login(this.frm.value).subscribe({
      next: (res) => {
        // save username, accesstoken and refresh token into localStorage
        this.authService.addAccessToken(res.token);
        this.authService.addRefreshToken(res.refreshToken);
        this.authService.addUsername(res.username);
        this.status.statusCode = res.statusCode;
        this.status.message = res.message;
        if (res.statusCode == 1) {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = 'some error on server side';
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.authService.isLoggedIn()) {
      console.log('Entered');
      this.router.navigate(['/admin']);
    }
  }
}
function calculateFaceMove(e: any) {
  throw new Error('Function not implemented.');
}
