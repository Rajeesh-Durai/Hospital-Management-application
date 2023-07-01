import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  //Adding the values to the database
  public AddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.AddForm = this.formBuilder.group({
      doctorName: [],
      specialization: [],
      experience: [],
    });
  }
  public Add(): void {
    this.api.NewDoctorInfo(this.AddForm.value).subscribe((result) => {
      alert(' Data Added ');
    });
  }
}
