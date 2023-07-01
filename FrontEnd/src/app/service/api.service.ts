import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //user part
  public cardiology(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/Cardiology');
  }
  public endocrinolgy(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/Endocrinology');
  }
  public orthopedics(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/Orthopedics');
  }
  public neurology(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/Neurology');
  }
  public nephrology(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/Nephrology');
  }
  // admin
  public doctorDetail(): Observable<any> {
    return this.http.get('https://localhost:7204/api/Doctor/DoctorDetail');
  }
  //doctor
  public appointmentDetail(): Observable<any> {
    return this.http.get(
      'https://localhost:7204/api/Appointment/AppointmentDetail'
    );
  }
  //Fill Appointment details
  public appointmentInfo(doclist: any): Observable<any> {
    return this.http.post(
      'https://localhost:7204/api/Doctor/FillAppointmentDetails',
      doclist
    );
  }
  //Add new doctor details
  public NewDoctorInfo(doclist: any): Observable<any> {
    return this.http.post(
      'https://localhost:7204/api/Doctor/NewDoctorInfo',
      doclist
    );
  }
  //del by id
  public deleteById(id: number): Observable<any> {
    return this.http.delete(
      'https://localhost:7204/api/Doctor/DeleteDoctorInfo?id=' + id
    );
  }
  //update
  public UpdateDoctorInfo(id: number, updatedDetail: any): Observable<any> {
    let url = 'https://localhost:7204/api/Doctor/UpdateDoctorInfo' + id;
    return this.http.put(url, updatedDetail);
  }
}
