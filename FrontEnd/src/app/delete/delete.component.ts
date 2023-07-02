import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  //Deleting the row based on id
  id!: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  delbtn(): void {
    console.log(this.id);
    this.api.deleteById(this.id).subscribe((res) => {
      alert('Deleted');
    });
  }
}
