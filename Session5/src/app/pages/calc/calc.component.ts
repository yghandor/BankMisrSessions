import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  MetaData = [['1', '2', '3', '4'], ['5', '6', '7', '9'], ['0', '+', '-', '/'], ['*', '=', '8', '.']];
  inp: any='';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleButtonClick(cell: string) {
    if (cell == '=') {
      this.inp = eval(this.inp);
    } else {
      this.inp += cell;
    }
  }
}
