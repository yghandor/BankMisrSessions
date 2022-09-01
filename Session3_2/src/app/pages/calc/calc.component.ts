import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  inp = '';

  metaDta = [["AC", "CE", "Sin", "Cos"], ["1", "2", "3", "4"], ["5", "6", "7", "8"],
    ["9", "0", "+", "-"], ["/", "*", ".", "=",'Alert']];

  handelButton(cell: string) {
    if(cell == 'Alert'){
      this.inp = 'alert(' + this.inp + ")";
    }else
    if (cell == 'Cos') {
      this.inp = 'Math.cos(' + this.inp + ")";
    } else if (cell == 'Sin') {
      let v = eval(this.inp);
      this.inp = Math.sin(v) + '';
    } else if (cell == 'CE') {
      this.inp = this.inp.substring(0, this.inp.length - 1);
    } else if (cell == 'AC') {
      this.inp = '';
    } else if (cell == '=') {
      this.inp = eval(this.inp);
    } else {
      this.inp += cell;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
