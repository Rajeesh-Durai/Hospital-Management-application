import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup/login', component: LoginComponent },
  { path: 'signup/login/home', component: HomeComponent },
  { path: 'login/home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login/admin', component: AdminComponent },
  { path: 'ourservice', component: OurServiceComponent },
  { path: 'add', component: AddComponent },
  { path: 'admin/add', component: AddComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'admin/delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
