import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Studentmodel } from './studentmodel';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  studentForm!: FormGroup;

  studentData :  any

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);

  // api = Injectable(StudentService)
  constructor(private api: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: [''],
      lasttName: [''],
      email: [''],
      mobileNumber: [''],
      city: [''],
    });
    this.getstudents(); 
  }

  getstudents() {
    this.api.gstStudents().subscribe((responce) => {
      this.studentData = responce;
    });
  }

  poststudent(data: Studentmodel) {
    console.log(data);

    this.api.addStudent(data).subscribe((responce) => {
      this.studentForm.reset();
    });
  }
}
