import { Injectable } from '@angular/core';
import { EmpI } from './emp-i';

@Injectable({
  providedIn: 'root',
})
export class EmpDataService {
  getData(): EmpI[] {
    return [
      { id: 213, name: 'Ram', salary: 56000, gender: 'male' },
      { id: 324, name: 'Sita', salary: 36000, gender: 'female' },
      { id: 243, name: 'SHam', salary: 36000, gender: 'male' },
      { id: 253, name: 'Om', salary: 76000, gender: 'male' },
    ];
  }

  constructor() {}
}
