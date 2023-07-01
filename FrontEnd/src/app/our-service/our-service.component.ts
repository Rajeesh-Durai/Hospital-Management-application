import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css'],
})
export class OurServiceComponent implements OnInit {
  ngOnInit(): void {
    const currentDate = new Date().toISOString().split('T')[0];
    let checkin = document.getElementById('checkin') as HTMLInputElement;
    checkin.min = currentDate;
    //api part
    this.cardiology();
    this.endocrinology();
    this.orthopedics();
    this.nephrology();
    this.neurology();
  }
  openPopup1() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }

  openPopup4() {
    let popup = document.getElementById('popup4');
    popup?.classList.add('open1');
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
  //To display the Discount location alone from the database
  public Cardiology: any;
  constructor(private api: ApiService) {}

  private cardiology(): void {
    this.api.cardiology().subscribe((result) => {
      this.Cardiology = result;
      console.log('done');
    });
  }
  //To display the Nature location alone from the database
  public Endocrinology: any;

  private endocrinology(): void {
    this.api.endocrinolgy().subscribe((result) => {
      this.Endocrinology = result;
      console.log('done');
    });
  }
  //To display the Adventerous location alone from the database
  public Orthopedics: any;

  private orthopedics(): void {
    this.api.orthopedics().subscribe((result) => {
      this.Orthopedics = result;
      console.log('done');
    });
  }
  //To display the Adventerous location alone from the database
  public Neurology: any;

  private neurology(): void {
    this.api.neurology().subscribe((result) => {
      this.Neurology = result;
      console.log('done');
    });
  }
  //To display the Adventerous location alone from the database
  public Nephrology: any;

  private nephrology(): void {
    this.api.nephrology().subscribe((result) => {
      this.Nephrology = result;
      console.log('done');
    });
  }
}
