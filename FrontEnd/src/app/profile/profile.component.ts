import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // Retrieve docName from sessionStorage
  constructor(
    private api: ApiService,
    private doctor: DoctorAppointmentService
  ) {}
  public value: any;
  public user: any;
  public userList: any;
  public arraylength!: number;
  public name: any;
  public names: any;
  ngOnInit(): void {
    var saved = localStorage.getItem('name');
    if (saved) {
      this.user = saved;
      this.api.DoctorDetailByName(this.user).subscribe((res) => {
        this.userList = res;
        console.log(this.userList);
      });
    }
  }
  List: any = {
    doctorName: [],
    specialization: [],
    experience: [],
  };
  Id: any;
  openPopup6() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup4() {
    this.Id = this.userList.doctorName;
    return this.api
      .UpdateDoctorProfileInfo(this.Id, this.List)
      .subscribe((result) => {
        let popup = document.getElementById('popup4');
        popup?.classList.add('open1');
      });
  }
  closePopup() {
    let popup = document.getElementById('popup');
    popup?.classList.remove('open');
  }
  closePopup1() {
    let popup = document.getElementById('popup4');
    popup?.classList.remove('open1');
    window.location.reload();
  }
}
