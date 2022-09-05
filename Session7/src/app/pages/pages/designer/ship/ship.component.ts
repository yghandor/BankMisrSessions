import {Component, Input, OnInit} from '@angular/core';
import {ShipInfo} from "./ShipInfo";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  @Input()
  info ?: ShipInfo ;
  displayEditDilaog: any;
  items2: MenuItem[] = [{

    label : 'Edit Label',
    command : event => {this.displayEditDilaog = true}

  }] ;

  constructor() { }

  ngOnInit(): void {
  }

  CalculateTextWidth(text: string): number {
    let canvas = document.createElement("canvas");
    let ctx: any = canvas.getContext("2d");
    ctx.font = "12pt Arial";  // This can be set programmaticly from the element's font-style if desired
    let textWidth = ctx.measureText(text).width;

    if(this.info && textWidth > this.info.width){
      this.info.width = textWidth + 20;
    }

    return textWidth;
  }

}
