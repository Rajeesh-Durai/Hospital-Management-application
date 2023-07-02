import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-our-doctor',
  templateUrl: './our-doctor.component.html',
  styleUrls: ['./our-doctor.component.css'],
})
export class OurDoctorComponent implements OnInit {
  ngOnInit(): void {
    //api part
    this.cardiology();
    this.endocrinology();
    this.orthopedics();
    this.nephrology();
    this.neurology();
  }
  doctorName: any;

  openPopup1(cardio: any) {
    this.doctorName = cardio.doctorName;
    this.list.doctorDetailsId = cardio.id;
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup2(endo: any) {
    this.doctorName = endo.doctorName;
    this.list.doctorDetailsId = endo.id;
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup3(ortho: any) {
    this.doctorName = ortho.doctorName;
    this.list.doctorDetailsId = ortho.id;
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup5(neuro: any) {
    this.doctorName = neuro.doctorName;
    this.list.doctorDetailsId = neuro.id;
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup6(nephro: any) {
    this.doctorName = nephro.doctorName;
    this.list.doctorDetailsId = nephro.id;
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  openPopup4() {
    console.log(this.list);
    this.api.appointmentInfo(this.list).subscribe((res) => {
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
  }
  //api part
  //To display the Cardiology alone from the database
  public Cardiology: any;
  constructor(private api: ApiService) {}

  private cardiology(): void {
    this.api.cardiology().subscribe((result) => {
      this.Cardiology = result;
      console.log('done');
    });
  }
  //To display the Endocrinology alone from the database
  public Endocrinology: any;

  private endocrinology(): void {
    this.api.endocrinolgy().subscribe((result) => {
      this.Endocrinology = result;
      console.log('done');
    });
  }
  //To display the orthopedics doctor alone from the database
  public Orthopedics: any;

  private orthopedics(): void {
    this.api.orthopedics().subscribe((result) => {
      this.Orthopedics = result;
      console.log('done');
    });
  }
  //To display the Neurology alone from the database
  public Neurology: any;

  private neurology(): void {
    this.api.neurology().subscribe((result) => {
      this.Neurology = result;
      console.log('done');
    });
  }
  //To display the Nephrology alone from the database
  public Nephrology: any;

  private nephrology(): void {
    this.api.nephrology().subscribe((result) => {
      this.Nephrology = result;
      console.log('done');
    });
  }
  list: any = {
    patientName: '',
    patientAge: '',
    doctorDetailsId: '',
    appointmentDate: '',
    appointmentTime: '',
  };
}
