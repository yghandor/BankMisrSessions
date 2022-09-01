import { Component } from '@angular/core';
import {MenuInfo} from "./Components/header/MenuInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedMenu = 'home';
  MyMenuData : Array<MenuInfo> = [
    {header : 'Home', command :'home',isActive: true,icon:'fa-home'},
    {header : 'Calculator', command :'calc',icon:'fa-calculator'},
    {header : 'About', command :'about',icon:'fa-amazon'}


  ];

  HandleMenuChangeEvent(e: string) {
    this.selectedMenu = e;
  }
}
