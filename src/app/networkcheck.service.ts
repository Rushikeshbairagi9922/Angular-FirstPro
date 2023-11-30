import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkcheckService {

  private connectionStatus = new Subject<boolean>();
  connectionStatus$ = this.connectionStatus.asObservable();

  constructor() { 
    this.checkConnectionStatus();
    window.addEventListener('online', ()=> this.checkConnectionStatus());
    window.addEventListener('offline', ()=> this.checkConnectionStatus());
  }

  private checkConnectionStatus(){
    this.connectionStatus.next(navigator.onLine);
  }
}
