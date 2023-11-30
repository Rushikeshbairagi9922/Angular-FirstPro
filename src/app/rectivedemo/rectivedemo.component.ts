import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rectivedemo',
  templateUrl: './rectivedemo.component.html',
  styleUrls: ['./rectivedemo.component.css']
})
export class RectivedemoComponent {

contactInfo=new FormGroup({
  fullname : new FormControl(''),
  email : new FormControl(''),
  password : new FormControl(''),
  dob : new FormControl('')

})

loginForm=new FormGroup({

})

onSubmit(){
  // console.log(this.contactInfo.value);

}
}
