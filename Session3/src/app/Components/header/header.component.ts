import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuInfo} from "./MenuInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  MenuData: Array<MenuInfo> = [];

  @Output()
  MenuChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  HandleMenuChangeClick($event: MouseEvent, item: MenuInfo) {
    this.MenuChange.emit(item.href);
    // for(let i = 0;i < this.MenuData.length ; i++){
    //     this.MenuData[i].isActive = false;
    // }
    this.MenuData.forEach(row =>{row.isActive = false;});
    item.isActive=true;
  }
}
