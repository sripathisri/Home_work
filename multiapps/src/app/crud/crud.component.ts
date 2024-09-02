import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentService } from '../student.service';
import { Studentmodel } from './studentmodel';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

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
  showAdd: boolean = true;
  studentData!: Studentmodel[];
  isFormSubmitted: boolean = false;

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);

  api = inject(StudentService);

  @ViewChild('addSudentPopup') Addpopup: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

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

  getstudents() {
    this.api.gstStudents().subscribe((res) => {
      this.studentData = res;
    });
  }

  poststudent(data: Studentmodel) {
    this.isFormSubmitted = !this.studentForm.valid;
    if (this.studentForm.valid) {
      this.api.addStudent(data).subscribe({
        next: (responce) => {
          this.studentForm.reset();
          this.getstudents();
          alert('Data added succesfully');
        },
        error: (err) => {
          alert(err);
        },
        complete: () => {},
      });
    }
  }

  edit(data: Studentmodel) {
    this.showAdd = !this.showAdd;
    this.addStudentpopup(this.Addpopup);
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

  addStudentpopup(modal: any) {
    this.modalService.open(modal);
  }
}
