import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Studentmodel } from './studentmodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  studentForm!: FormGroup;
  studentId!: number;
  showAdd!: boolean;
  showupdate!: boolean;
  studentData!: Studentmodel[];
  isFormSubmitted: boolean = false;

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);

  api = inject(StudentService);
  // constructor(private api: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lasttName: [''],
      email: [''],
      mobileNumber: [''],
      city: [''],
    });
    this.getstudents();
  }

  addbtn() {
    this.showAdd = true;
    this.showupdate = false;
  }

  getstudents() {
    this.api.gstStudents().subscribe((res) => {
      this.studentData = res;
    });
  }

  poststudent(data: Studentmodel) {
    this.isFormSubmitted = !this.studentForm.valid
    if (this.studentForm.valid) {
      this.api.addStudent(data).subscribe(
        (responce) => {
          this.studentForm.reset();
          this.getstudents();
          alert("Data added succesfully")
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  edit(data: Studentmodel) {
    this.showAdd = false;
    this.showupdate = true;
    this.studentId = data.id;
    this.studentForm.setValue({
      firstName: data.firstName,
      lasttName: data.lasttName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      city: data.city,
    });
  }

  deletStudent(id: any) {
    if (confirm('Are u sure want to delete')) {
      this.api.deleteStudent(id).subscribe((res) => {
        this.getstudents();
      });
    }
  }

  updateStudent() {
    console.log(this.studentForm.value);
    this.api
      .updateStudent(this.studentId, this.studentForm.value)
      .subscribe((res) => {
        this.getstudents();
        this.studentForm.reset();
      });
  }
}
