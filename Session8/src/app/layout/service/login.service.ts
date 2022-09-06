import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogin: boolean = false;
  fullName: any = '';

  IsLogin(): boolean {
    return this.isLogin;
  }


  LogMe(fullName: string) {
    this.fullName = fullName;
    this.isLogin = true;
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('fullName', fullName);
  }

  LogMeOut() {
    this.fullName = '';
    this.isLogin = false;
    localStorage.clear();
  }

  constructor() {
    if (localStorage.getItem('isLogin') == 'true') {
      this.isLogin = true;
      this.fullName = localStorage.getItem('fullName');
    }
  }
}
