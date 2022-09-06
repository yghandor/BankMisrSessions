import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {LoginService} from "./service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService
    , public _loginService: LoginService
    , private _router: Router
  ) {
  }

  HandleLogOut() {
    this._loginService.LogMeOut();
    this._router.navigate(['/auth/login']);
  }
}
