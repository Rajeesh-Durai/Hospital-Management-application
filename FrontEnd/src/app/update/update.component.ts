import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  Id!: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  //update

  List: any = {
    doctorName: [],
    specialization: [],
    experience: [],
  };
  public UpdateById() {
    console.log(this.List);
    return this.api.UpdateDoctorInfo(this.Id, this.List).subscribe((result) => {
      alert(' Data Updated ');
    });
  }
}
