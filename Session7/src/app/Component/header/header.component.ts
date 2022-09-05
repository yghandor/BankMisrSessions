import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LoginService} from "../../Common/Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  MenuData : MenuItem[] = [

    {label : 'Home', routerLink : '/pages/main/home'},
    {label : 'Designer', routerLink : '/pages/main/designer'},

  ];

  constructor(public _login : LoginService , private _router : Router) { }

  ngOnInit(): void {
  }

  LogOut(e: MouseEvent) {
    e.preventDefault();
    this._login.LogMeOut();
    this._router.navigate(['login']);
  }
}
