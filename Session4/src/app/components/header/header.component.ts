import {Component, Input, OnInit} from '@angular/core';
import {MenuInfo} from "./MenuInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('MenuData')
  set setMenuData(MenuData: MenuInfo[]) {
    this.MenuData = MenuData;
    this.ActiveMenuData = MenuData;
  }


  MenuData: MenuInfo[] | undefined;


  ActiveMenuData: MenuInfo[] | undefined;
  NavigationHistory: Array<any> = [];


  constructor() {
  }

  ngOnInit(): void {
    //this.ActiveMenuData = this.MenuData;
  }

  ShowMenu(e: MouseEvent, x: HTMLDivElement) {
    e.preventDefault();
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }

  CHeckMenu(e: MouseEvent, item: MenuInfo) {

    if (item.childMenu && item.childMenu.length > 0) {
      e.preventDefault();
      this.NavigationHistory.push(this.ActiveMenuData);
      this.ActiveMenuData = item.childMenu;
    }
  }

  HandleMenuBack(e: MouseEvent) {
    e.preventDefault();
    this.ActiveMenuData = this.NavigationHistory.pop();

  }
}
