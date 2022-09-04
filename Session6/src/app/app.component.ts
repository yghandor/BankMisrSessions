import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalStateService} from "./Common/global-state.service";
import {LoginService} from "./Common/login.service";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _stat: GlobalStateService,
              private _loginService: LoginService, private _router: Router
  ) {

    // this._router.events.subscribe(e => {
    //   if (e instanceof NavigationStart) {
    //
    //     let url = e.url;
    //
    //     if (this._loginService.IsLogin()) {
    //
    //       if (url.includes('pages') == false) {
    //         this._router.navigate(['pages']);
    //       }
    //
    //     } else {
    //
    //       if (url.includes('login') == false) {
    //
    //         this._router.navigate(['login']);
    //
    //       }
    //
    //     }
    //
    //
    //   }
    //
    // });

  }


  display = false;
  SubScribeID = '';

  ngOnInit(): void {
    this.SubScribeID = this._stat.GlobalStatsubscribe('SliderChange', (e: any) => {
      debugger;
      this.display = e;

    });

  }

  ngOnDestroy(): void {
    this._stat.unsubscribe('SliderChange', this.SubScribeID);
  }
}
