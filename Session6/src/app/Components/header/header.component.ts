import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";
import {GlobalStateService} from "../../Common/global-state.service";
import {LoginService} from "../../Common/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Home', routerLink: '/pages/all/home'},
    {
      label: 'tools', items: [

        {label: 'Calculator', routerLink: '/pages/all/calc'}

      ]
    },
    {
      label: '', icon: PrimeIcons.BARS, command: event => {
        this._state.notifyDataChanged('SliderChange', true);

      }
    }
  ];

  constructor(private _state: GlobalStateService,
              public _loginService: LoginService,
              private _router: Router
  ) {
  }

  ngOnInit(): void {
  }


  LogOutMe() {
    this._loginService.logOut();
    this._router.navigate(['login']);
  }
}
