import { Component } from '@angular/core';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginInfo!: FormGroup;
  isOnline : boolean= true;
  constructor(public rout: Router,private networkcheck :NetworkcheckService) {}

  ngOnInit(): void {
    this.initForm();
        this.networkcheck.connectionStatus$.subscribe((isOnline)=>{
          this.isOnline = isOnline;
        })
    }

  initForm(): void {
    

    this.loginInfo = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required])
    });

  }
  get Email(): FormControl{
    return this.loginInfo.get('email') as FormControl;
  }

  onSubmit() {
    const storedData = localStorage.getItem('userData');
    let userData: any;
    if (storedData) {
      userData = JSON.parse(storedData);
    }
    
    if (
      this.loginInfo.value.email == userData.email &&
      this.loginInfo.value.password == userData.password
      ) {
      console.log(userData.email, userData.password);
      alert('Login Successfully');
      this.rout.navigate(['UserHomeComponent']);
    }else{
      alert("invalid user")
    }
  }

  register() {
    this.rout.navigate(['RegisterComponent']);
  }

  // get input() { return this.loginInfo.get('max'); }
}
