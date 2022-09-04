import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../Common/login.service";

@Injectable({
  providedIn: 'root'
})
export class PagesguardGuard implements CanActivate {
  constructor(private _login : LoginService,private _router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(this._login.IsLogin()){
       return true;
     }else{
        this._router.navigate(['login']);
        return false;
     }
  }

}
