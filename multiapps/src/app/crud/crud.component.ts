import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  formvalue!: FormGroup;

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);
  

  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      firstName: [''],
      lasttName: [''],
      email: [''],
      mobileNumber: [''],
      city: [''],
    });
  }

  poststudent() {
    console.log(this.formvalue.value)
  }
}
