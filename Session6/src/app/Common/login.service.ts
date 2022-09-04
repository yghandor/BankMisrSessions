import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private IsUserLogin = false;
  full_Name: any = '';

  constructor() {
    if (localStorage.getItem('IsUserLogin') == 'true') {
      this.IsUserLogin = true;
      this.full_Name = localStorage.getItem('full_Name');
    }
  }

  IsLogin(): boolean {
    return this.IsUserLogin;
  }

  logMe(name: string) {
    this.full_Name = name;
    this.IsUserLogin = true;
    localStorage.setItem('full_Name', name);
    localStorage.setItem('IsUserLogin', 'true');
  }

  logOut() {
    this.full_Name = '';
    this.IsUserLogin = false;
    localStorage.setItem('full_Name', '');
    localStorage.setItem('IsUserLogin', 'false');
  }
}
