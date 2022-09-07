import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit {

  constructor(public _login: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  HandleSignOut() {
      this._login.logOut();
      this._router.navigate(['auth']);
  }
}
