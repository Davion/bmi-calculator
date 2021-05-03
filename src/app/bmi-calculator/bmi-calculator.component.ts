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

  checkHeight(){
    if(this.height < 140) return this.height = 140;

    if(this.height > 220) return this.height = 220;
  }

  checkWeight(){
    if(this.weight < 40) return this.weight = 40;

    if(this.weight > 120) return this.weight = 120;
  }

  checkAge(){
    if(this.age < 15) return this.age = 15;

    if(this.age > 100) return this.age = 100;
  }

  subtWeight(){
    if(this.weight > 40) this.weight -= 1;
  }

  addWeight(){
    if(this.weight < 120) this.weight += 1;
  }

  subtAge(){
    if(this.age > 15) this.age -= 1;
  }

  addAge(){
    if(this.age < 100) this.age += 1;
  }

}
