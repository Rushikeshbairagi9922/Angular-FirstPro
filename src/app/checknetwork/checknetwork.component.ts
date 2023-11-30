import { Component, OnInit } from '@angular/core';
import { NetworkcheckService } from '../networkcheck.service';

@Component({
  selector: 'app-checknetwork',
  templateUrl: './checknetwork.component.html',
  styleUrls: ['./checknetwork.component.css']
})
export class ChecknetworkComponent implements OnInit {

isOnline : boolean= true;

constructor(private networkcheck :NetworkcheckService) { }


  ngOnInit(): void {
      this.networkcheck.connectionStatus$.subscribe((status)=>{
        this.isOnline = status;
      })
  }
}
