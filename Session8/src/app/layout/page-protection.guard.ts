import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "./service/login.service";

@Injectable({
  providedIn: 'root'
})
export class PageProtectionGuard implements CanActivate {
  constructor(private _router: Router,private  _loginService : LoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._loginService.IsLogin())
      return  true;

    this._router.navigate(['auth/login']);
    return false;
  }

}
