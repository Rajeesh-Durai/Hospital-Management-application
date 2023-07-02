import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorAppointmentService {
  public requestDataList: any = [];
  public doctorDataList = new BehaviorSubject<any>([]);

  constructor() {}
  getDetail() {
    return this.doctorDataList.asObservable();
  }

  //setting to request

  setToRequest(doctor: any) {
    this.requestDataList.push(...doctor);
    this.doctorDataList.next(doctor);
  }
  addToDTO(doctor: any) {
    this.requestDataList.push(doctor);
    this.doctorDataList.next(this.requestDataList);
    console.log(this.requestDataList);
  }
}
