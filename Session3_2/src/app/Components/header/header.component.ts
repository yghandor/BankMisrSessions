import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuInfo} from "./MenuInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  MenuData : Array<MenuInfo>  | undefined;

  @Output()
  MenuSelectionHasBeanChange : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  HandleMenuChangeClick(item: MenuInfo) {
    this.MenuData?.forEach(row=>row.isActive=false);
    item.isActive = true;
    this.MenuSelectionHasBeanChange.emit(item.command);

  }
}
