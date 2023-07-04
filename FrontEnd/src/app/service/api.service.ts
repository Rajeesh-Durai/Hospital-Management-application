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
  public appointmentDetail(name: any): Observable<any> {
    return this.http.get(
      'https://localhost:7204/api/Appointment/AppointmentDetail?name=' + name
    );
  }
  public DoctorDetailByName(name: any): Observable<any> {
    return this.http.get(
      'https://localhost:7204/api/Doctor/DoctorDetailByName?name=' + name
    );
  }
  //Filled Appointment details
  public appointmentInfo(list: any): Observable<any> {
    return this.http.post(
      'https://localhost:7204/api/Appointment/FillAppointmentDetails',
      list
    );
  }
  //Add new doctor details
  public NewDoctorInfo(doclist: any): Observable<any> {
    return this.http.post(
      'https://localhost:7204/api/Doctor/NewDoctorInfo',
      doclist
    );
  }
  //Add new doctor profile
  public DoctorProfile(doclist: any): Observable<any> {
    return this.http.post(
      'https://localhost:7204/api/DoctorProfile/NewDoctorInfo',
      doclist
    );
  }
  public DisplayDoctorProfile(): Observable<any> {
    return this.http.get(
      'https://localhost:7204/api/DoctorProfile/DoctorProfile'
    );
  }
  //del by id
  public deleteById(id: number): Observable<any> {
    return this.http.delete(
      'https://localhost:7204/api/Doctor/DeleteDoctorInfo?id=' + id
    );
  }
  //delete by name
  public deleteByName(id: any): Observable<any> {
    return this.http.delete(
      'https://localhost:7204/api/DoctorProfile/DeleteDoctorProfile?id=' + id
    );
  }
  //update
  public UpdateDoctorInfo(id: number, updatedDetail: any): Observable<any> {
    let url = 'https://localhost:7204/api/Doctor/UpdateDoctorInfo?id=' + id;
    return this.http.put(url, updatedDetail);
  }
  public UpdateDoctorProfileInfo(id: any, updatedDetail: any): Observable<any> {
    let url =
      'https://localhost:7204/api/Doctor/UpdateDoctorProfileInfo?id=' + id;
    return this.http.put(url, updatedDetail);
  }
}
