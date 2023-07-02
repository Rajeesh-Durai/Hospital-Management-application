import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MustMatch } from '../helpers/must-watch.validator';
import { validPattern } from '../helpers/pattern-watch.validator';
import { RequestDataDTO } from '../models/requestDoctorDataDTO';
import { Status } from '../models/status';
import { RequestDoctorDataService } from '../service/request-doctor-data.service';
import { SignupService } from '../service/signup.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  myimg: string = 'assets/images/sign-up.jpg';
  myAvatar: string = 'assets/images/signup-avatar.png';
  pageLogo: string = 'assets/images/project-logo.png';
  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private requestService: RequestDoctorDataService
  ) {}

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }
  roleName: any;
  messageout!: string;
  onPost() {
    if (this.roleName === 'Doctor') {
      this.messageout = 'Access need to be given by Admin';
      var request = new RequestDataDTO();
      request = this.frm.value;
      this.requestService.addToRequest(request);
    } else {
      this.status = { statusCode: 0, message: 'wait..' };
      this.signupService.signup(this.frm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.status = res;
          this.frm.reset();
        },
        error: (err) => {
          this.status.statusCode = 0;
          this.status.message = 'some error on server side';
          console.log(err);
        },
        complete: () => {},
      });
      setTimeout(() => {
        this.openPopup();
      }, 3000);
    }
  }

  ngOnInit(): void {
    const patternRegex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'
    );
    // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.frm = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', Validators.required],
        roles: [],
        email: ['', Validators.required],
        password: ['', [Validators.required, validPattern(patternRegex)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  openPopup() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  closePopup() {
    let popup = document.getElementById('popup');
    popup?.classList.remove('open');
  }
}
