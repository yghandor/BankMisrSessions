import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  userName ?: string;
  password ?: string;

  constructor(private _login: LoginService, private _router: Router, private _http: HttpClient) {
  }

  ngOnInit(): void {
  }

  isHttpCalling = false;

  HandleLogin() {
    this.isHttpCalling = true;
    let url = 'http://127.0.0.1:8080/rest/login';
    let body = {

      "user_name": this.userName,
      "password": this.password
    };

    this._http.post(url, body).subscribe((resp: any) => {
      if (resp.full_name) {

        this._login.logMe(resp.full_name);
        this._router.navigate(['pages']);

      } else {
        alert(resp.error);

      }

      this.isHttpCalling = false;

    }, error => {

      alert(error.message);
      this.isHttpCalling = false;

    });

  }
}
