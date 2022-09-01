import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  MetaData: string[][] = [['C', '<-'], ['1', '2', '3', '4']
    , ['5', '6', '7', '8'], ['9', '0', '+', '-']
    , ['/', '*', '=', 'sign']];

  calcText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  HandleButtonClick(cell: string) {
    if (cell == '<-') {
      if(this.calcText.length > 0){
        this.calcText = this.calcText.substring(0,this.calcText.length - 1 );
      }
    } else if (cell == 'C') {
      this.calcText = '';
    } else if (cell == 'sign') {
      // debugger;
      // let v = eval(this.inputvalue);
      // this.inputvalue = Math.sin(v) + '';
      this.calcText = 'sin(' + this.calcText + ')';
    } else if (cell == '=') {
      this.calcText = eval(this.calcText.replace('sin(', 'Math.sin('));
    } else {
      this.calcText += cell;
    }
  }


}
