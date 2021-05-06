import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

  calculateMaleBmi(height, weight){
    return ((weight / height / height) * 10000).toFixed(4);
    // console.log(((weight / height / height) * 10000).toFixed(4));
  }

  calculateFemaleBmi(height, weight){
    return ((weight / height / height) * 10000).toFixed(4);
    // console.log(((weight / height / height) * 10000).toFixed(4));
  }
}
