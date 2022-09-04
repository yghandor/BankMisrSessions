import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Common/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Login : LoginService , private _router : Router) { }

  ngOnInit(): void {
  }

  HandleLogin() {
    this._Login.logMe('Yasser El Ghandour');
    this._router.navigate(['pages']);
  }
}
