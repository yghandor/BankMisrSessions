import {Component, OnInit} from '@angular/core';
import {ShipInfo} from "./ship/ShipInfo";

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {
  displayEditDilaog: any = false;


  Ships: ShipInfo[] = [];

  ToolBarShips: ShipInfo[] = [

    {label: 'Blue', width: 70, height: 50, Color: 'blue', x: 5, y: 5},
    {label: 'red', width: 70, height: 50, Color: 'red', x: 5, y: 80}

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  SelectedShip: ShipInfo | undefined;
  LastX: number = 0;
  LastY: number = 0;

  HandleShipMouseDown(ship: ShipInfo, e: MouseEvent) {
    this.SelectedShip = ship;
    e.preventDefault();
    this.LastX = e.x;
    this.LastY = e.y;
  }

  HandleMouseUp() {
    this.SelectedShip = undefined;
  }

  HandleMouseMove(e: MouseEvent) {
    if (this.SelectedShip) {

      let Dx = e.x - this.LastX;
      let Dy = e.y - this.LastY;


      this.SelectedShip.x += Dx;
      this.SelectedShip.y += Dy;


      this.LastX = e.x;
      this.LastY = e.y;
    }

  }

  SelectedShipForEdit: ShipInfo | undefined;

  HandleMouseClick(e: MouseEvent, ship: ShipInfo) {

    e.preventDefault();
    this.SelectedShipForEdit = ship;
    this.displayEditDilaog = true;

  }

  SelectedShipForDroop: ShipInfo | undefined;

  HandleDrag(item: ShipInfo) {
    this.SelectedShipForDroop = item;
  }

  allowDrop(e: DragEvent) {
    e.preventDefault();
  }

  handleDrop(e: DragEvent) {
    if (this.SelectedShipForDroop) {

      let newShip = {...this.SelectedShipForDroop};
      newShip.label = 'New #' + (this.Ships.length + 1);
      newShip.x = e.x - 70;
      newShip.y = e.y - 70;

      this.Ships.push(newShip);

    }
  }
}
