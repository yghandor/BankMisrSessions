import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'NTGGrid',
  templateUrl: './ntggrid.component.html',
  styleUrls: ['./ntggrid.component.scss']
})
export class NTGGridComponent implements OnInit {

  @Input()
  cols ?: any[];
  @Input()
  data ?: any[];

  constructor() {
  }

  ngOnInit(): void {

  }

  HandleFilter(dt1: any,e : any) {

    dt1.filterGlobal(e.target.value, 'contains')

  }
}
