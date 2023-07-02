import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestDoctorDataService {
  constructor() {}
  public requestDataList: any = [];
  public doctorDataList = new BehaviorSubject<any>([]);

  //getting doctor

  getDetail() {
    return this.doctorDataList.asObservable();
  }

  //setting to request

  setToRequest(doctor: any) {
    this.requestDataList.push(...doctor);
    this.doctorDataList.next(doctor);
  }
  //adding to request

  addToRequest(doctor: any) {
    this.requestDataList.push(doctor);
    this.doctorDataList.next(this.requestDataList);
    console.log(this.requestDataList);
  }

  //remove 1 item from request

  removeRequestData(doctor: any) {
    this.requestDataList.map((a: any, index: any) => {
      if (doctor.username === a.username) {
        this.requestDataList.splice(index, 1);
      }
    });
    this.doctorDataList.next(this.requestDataList);
  }

  //remove all items from request

  removeAllRequest() {
    this.requestDataList = [];
    this.doctorDataList.next(this.requestDataList);
  }
}
