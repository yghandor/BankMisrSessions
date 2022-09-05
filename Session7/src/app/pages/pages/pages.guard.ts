import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../../Common/Services/login.service";

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {
  constructor(private router: Router, private _loginService: LoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._loginService.isLogin) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
