import { Component } from '@angular/core';

@Component({
  selector: 'app-templetdemo',
  templateUrl: './templetdemo.component.html',
  styleUrls: ['./templetdemo.component.css']
})
export class TempletdemoComponent {


  onSubmit(loginInfo:any)
{
  console.log(loginInfo.value)
}
}
