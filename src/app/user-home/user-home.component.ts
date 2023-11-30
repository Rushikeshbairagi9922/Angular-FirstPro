import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkcheckService } from '../networkcheck.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  isOnline : boolean= true;
  constructor(public rout: Router,private networkcheck :NetworkcheckService ,){
  
  }
  ngOnInit(): void {
    
    this.networkcheck.connectionStatus$.subscribe((isOnline)=>{
      this.isOnline = isOnline;
    })
  }
  logout(){
    this.rout.navigate(['LoginComponent']);
  }
}
