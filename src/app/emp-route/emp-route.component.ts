import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { EmpInfoComponent } from '../emp-info/emp-info.component';

@Component({
  selector: 'app-emp-route',
  templateUrl: './emp-route.component.html',
  styleUrls: ['./emp-route.component.css'],
})
export class EmpRouteComponent implements OnInit {
  id: any;
  emplist: any = [];
  employee: any;

  constructor(
    public myservies: EmpDataService,
    public _activeRouter: ActivatedRoute,
    public rout: Router
  ) {}

  ngOnInit(): void {
    this.id = this._activeRouter.snapshot.params['id'];

    this.emplist = this.myservies.getData();

    for (let i = 0; i < this.emplist.length; i++) {
      if (this.id == this.emplist[i].id) {
        this.employee = this.emplist[i];
      }
    }
  }

  back(){
    this.rout.navigate(['Employee']);
  }
}
