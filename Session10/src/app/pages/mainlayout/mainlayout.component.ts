import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit {
  items: MenuItem[] = [

    {label: 'Security Users', items: [

        {label:'User List',routerLink : '/pages/users/list'}


      ]}

  ];

  constructor(public _login: LoginService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  HandleSignOut(e: MouseEvent) {
    e.preventDefault();
    this._login.logOut();
    this._router.navigate(['auth']);
  }
}
