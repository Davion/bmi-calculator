import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  height: number = 165;
  weight: number = 75;
  age: number = 25;
  constructor() { }

  ngOnInit(): void {
  }

}
