import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-studentformreactive',
  templateUrl: './studentformreactive.component.html',
  styleUrls: ['./studentformreactive.component.css'],
})
export class StudentformreactiveComponent implements OnInit {
  studentInfo!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const passwordStrengthValidator: ValidatorFn = (
      control: AbstractControl
    ) => {
      const hasNumber = /[0-9]/.test(control.value);
      const hasUpper = /[A-Z]/.test(control.value);
      const hasLower = /[a-z]/.test(control.value);
      const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(control.value);

      const isValid = hasNumber && hasUpper && hasLower && hasSpecial;

      return isValid ? null : { weakPassword: true };
    };

    

    this.studentInfo = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl(),
      Lang: new FormControl(),
      password: new FormControl('', [Validators.required, passwordStrengthValidator,]),
      confirmPass:new FormControl('', [Validators.required, passwordStrengthValidator]),
      state: new FormControl('', Validators.required),
    });

  }
  
 


  onSubmit() {
    if (this.studentInfo.valid) {
      console.log(this.studentInfo.value);
      alert('Student Register Successfully');
    } else {
      alert('Please Fill All Fields');
    }
  }
}

