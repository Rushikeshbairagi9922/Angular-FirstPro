import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkcheckService } from '../networkcheck.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerInfo!: FormGroup;
  firstname: any;

  

  isOnline : boolean= true;
    
  constructor(private rout: Router , private networkcheck :NetworkcheckService , ) { }
  
 
  ngOnInit(): void {
    this.initForm();
    this.networkcheck.connectionStatus$.subscribe((isOnline)=>{
      this.isOnline = isOnline;
    })
  }

  initForm(): void {
   

    this.registerInfo = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z].*")
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z].*")
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/),
      ]),

      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/)
      ]),
      // confirmPass: new FormControl('', Validators.required),
    }
    // {
    //   validators: [this.passwordMatcher],
    // }
    );
  }

  // passwordMatcher(formGroup: FormGroup) {
  //   const password = formGroup.get('password')?.value;
  //   const confirmPassword = formGroup.get('confirmPass')?.value;

  //   return password === confirmPassword ? null : { passwordMismatch: true };
  // }

  

  // get Firstname(): FormControl{
  //   return this.registerInfo.get('firstname') as FormControl ;
  // }

  // get Lastname(): FormControl{
  //   return this.registerInfo.get('lastname') as FormControl ;
  // }

  // get email(): FormControl{
  //   return this.registerInfo.get('email') as FormControl ;
  // }

  // get password(): FormControl{
  //   return this.registerInfo.get('password') as FormControl ;
  // }

  onSubmit() {
    if (this.registerInfo.valid ) {
      const formData = JSON.stringify(this.registerInfo.value);
      localStorage.setItem('userData', formData);

      console.log(this.registerInfo.value);

      alert('Student Register Successfully');

      this.rout.navigate(['LoginComponent']);
    } else {
       
    }
  }
}
