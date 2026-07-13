import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class Parent {

  studentName: string = 'John Smith';
  studentId: number = 101;

  message: string = '';

  onStudentSelected(student: string) {
    this.message = student + ' has been selected.';
  }
}