import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

  calculateMaleBmi(height, weight){
    console.log((weight / height / height) * 10000);
  }

  calculateFemaleBmi(height, weight){
    console.log((weight / height / height) * 10000);
  }
}