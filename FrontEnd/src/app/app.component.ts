import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HospitalManagement';
  roles = '';
  projLogo: string = 'assets/images/project-logo.jpg';
  isLoggedIn!: boolean;
  constructor(private authService: AuthService, private route: Router) {}

  checkLoggedInUser() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.roles = this.authService.getUserRole();
  }
  logout() {
    this.authService.logout();
    this.route.navigate(['']);
  }
}
