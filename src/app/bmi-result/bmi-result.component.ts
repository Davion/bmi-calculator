import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RESULT_VARIATIONS } from '../modal-result-variations'

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.css']
})
export class BmiResultComponent implements OnInit {

  modalIcon: string;
  modalIconColor: string;
  modalResult: number;
  modalGender: string;
  modalMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { 
    this.modalResult = data.bmiResult;
   }

  ngOnInit(): void {
    this.modalGender = this.data.bmiGender > 0 ? 'Male' : 'Female';
    this.setUpModalVariations();
  }

  setUpModalVariations(){
    let variationIndex;
    let messageEnding;
    if(this.modalResult < 17){
      // Severe Underweight
      variationIndex = 2;
      messageEnding = ' Underweight';
    }else if(this.modalResult >= 17 && this.modalResult < 19 ){
      // Moderate Underweight
      variationIndex = 1;
      messageEnding = ' Underweight';
    }else if(this.modalResult >= 19 && this.modalResult < 25 ){
      // Normal
      variationIndex = 0;
      messageEnding = '';
    }else if(this.modalResult >= 25 && this.modalResult < 30 ){
      // Moderate Overweight
      variationIndex = 1;
      messageEnding = ' Overweight';
    }else if(this.modalResult >= 30){
      // Severe Overweight
      variationIndex = 2;
      messageEnding = ' Overweight';
    }

    this.modalIcon = RESULT_VARIATIONS[variationIndex].icon;
    this.modalIconColor = RESULT_VARIATIONS[variationIndex].color;
    this.modalMessage = RESULT_VARIATIONS[variationIndex].message + messageEnding;
  }

}
