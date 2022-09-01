import {Component} from '@angular/core';
import {MenuInfo} from "./Components/header/MenuInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  SelectedMenu = 'home';

  MyMenuData: Array<MenuInfo> = [
    {MenuCaption: 'Home', href: 'home', isActive: true},
    {MenuCaption: 'Calculator', href: 'calc'},
    {MenuCaption: 'About', href: 'about'}

  ];


  MyMenuData2: Array<MenuInfo> = [
    {MenuCaption: 'Extra Data', href: 'home2', isActive: false},
    {MenuCaption: 'Advanced Calculator', href: 'calc2'}


  ];

  HandleMenuChange(e: string) {
     this.SelectedMenu = e;

  }
}
