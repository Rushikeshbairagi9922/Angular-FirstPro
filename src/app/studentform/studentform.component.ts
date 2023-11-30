import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css'],
})
export class StudentformComponent {
  studentInfo: any;
  selectedGender: any;
  selectedLanguages: { [key: string]: boolean } = {};
  selectedState: any;

  onSubmit(studentLogin: NgForm) {
    if (studentLogin.valid) {
      console.log(studentLogin.value);
      alert('Student Register Successfully');
    } else {
      alert('Please Fill All Fields');
    }
  }
}
