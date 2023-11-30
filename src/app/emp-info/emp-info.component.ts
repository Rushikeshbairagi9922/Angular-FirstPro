import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  employee : any=[];
  constructor(public emprecord : EmpDataService){

  }
  ngOnInit(): void {
    
    this.employee = this.emprecord.getData();
  console.log("Employee Data",this.employee);
  }
}
