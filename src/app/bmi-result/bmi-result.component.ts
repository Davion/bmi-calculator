import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.css']
})
export class BmiResultComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Number) { }

  ngOnInit(): void {
  }

}
