import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean = false;
  fullName: any = '';

  constructor() {

    if (localStorage.getItem('isLogin') == 'true') {
      this.isLogin = true;
      this.fullName = localStorage.getItem('fullName');
    }

  }

  LogMe(_fullName: string) {
    this.fullName = _fullName;
    this.isLogin = true;
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('fullName', _fullName);
  }

  LogMeOut() {
    this.fullName = '';
    this.isLogin = false;
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('fullName', '');
  }

}
