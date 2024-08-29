import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Studentmodel } from './crud/studentmodel';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  http = inject(HttpClient);
  constructor() {}

  // get student
  gstStudents() {
    return this.http.get<Studentmodel[]>('http://localhost:3000/students');
  }

  // add student
  addStudent(data: Studentmodel) {
    return this.http.post<Studentmodel[]>(
      'http://localhost:3000/students',
      data
    );
  }

  // delete studen
  deleteStudent(id: number) {
    return this.http.delete<Studentmodel[]>(
      'http://localhost:3000/students/' + id
    );
  }

  // update student
  updateStudent(id: number, data:Studentmodel[]) {
    return this.http.put('http://localhost:3000/students/' + id, data);
  }
}
