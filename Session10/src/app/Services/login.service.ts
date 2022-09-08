import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean = false;
  full_name: string = '';

  constructor() {
    if (localStorage.getItem('kjhekjwq') == 'qwlkew;lq') {
      this.isLogin = true;
      this.full_name = localStorage.getItem('full_name') || '';
    }
  }

  logMe(full_name: string) {
    this.isLogin = true;
    this.full_name = full_name;
    localStorage.setItem('kjhekjwq', 'qwlkew;lq');
    localStorage.setItem('full_name', full_name);
  }

  logOut() {
    this.isLogin = false;
    this.full_name = '';
    localStorage.clear();
  }

}
