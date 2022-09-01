import {Component} from '@angular/core';
import {MenuInfo} from "./components/header/MenuInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  MenuData: MenuInfo[]  = [
    {header: 'Home', command: 'home', Icon: 'fa-home'},
    {
      header: 'Tool', Icon: 'fa-toggle-on', childMenu: [

        {header: 'Calculator', command: 'calc', Icon: 'fa-calculator'},
        {header: 'Advanced Calculator', command: 'calc2', Icon: 'fa-calculator'}

      ]
    },
    {header: 'About', command: 'about', Icon: 'fa-amazon'}


  ];

}
