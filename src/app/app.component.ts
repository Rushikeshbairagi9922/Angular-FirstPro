import { Component, OnInit } from '@angular/core';
import { NetworkcheckService } from './networkcheck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirstPro';

    isOnline : boolean= true;
    
    constructor(private networkcheck :NetworkcheckService) { }
    
    
      ngOnInit(): void {
          this.networkcheck.connectionStatus$.subscribe((isOnline)=>{
            this.isOnline = isOnline;
          })
          
      }
}
