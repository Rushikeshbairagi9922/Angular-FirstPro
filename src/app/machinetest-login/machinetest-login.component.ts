import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NetworkcheckService } from '../networkcheck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machinetest-login',
  templateUrl: './machinetest-login.component.html',
  styleUrls: ['./machinetest-login.component.css']
})
export class MachinetestLoginComponent {

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

   const enteremail = this.loginInfo.value.email;
   const enterpass = this.loginInfo.value.password;

    if(enteremail === 'sntuser' && enterpass === 'Snt@1234'){

      const formData = JSON.stringify(this.loginInfo.value);
      localStorage.setItem('userData', formData);
    }

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
      this.rout.navigate(['Machinetest1list']);
    }else{
    
    alert("invalid user")
    }
  }

}
