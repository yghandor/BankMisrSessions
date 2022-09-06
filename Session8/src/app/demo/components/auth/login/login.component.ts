import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {LoginService} from "../../../../layout/service/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .p-password input {
      width: 100%;
      padding: 1rem;
    }

    :host ::ng-deep .pi-eye {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    .ng-invalid {
      border-bottom: solid 3px red;
    }
  `]
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  password!: string;
  userName: string = '';

  constructor(public layoutService: LayoutService
    , private _loginService: LoginService,
              private _router: Router,
              private _http: HttpClient,
              private messageService: MessageService
  ) {
  }

  IsHttpWorking = false;

  HandleLogin() {
    let url = '/rest/login';
    let Body = {

      "userName": this.userName,
      "password": this.password
    };
    this.IsHttpWorking = true;
    this._http.post(url, Body).subscribe((rsp: any) => {
      // console.log(rsp);
      // alert(rsp);
      if (rsp.errorCode) {
        this.messageService.add({severity: 'error', summary: 'Login Fail:' + rsp.errorCode, detail: rsp.error});

      } else {
        this._loginService.LogMe(rsp.full_name);
        this._router.navigate(['']);
      }

    }, error => {


      // alert(error.message);
      this.messageService.add({severity: 'error', summary: 'Error', detail: error.message});

      this.IsHttpWorking = false;

    }, () => {
      this.IsHttpWorking = false;

    });


  }
}
