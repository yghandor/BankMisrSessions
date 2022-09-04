import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalStateService} from "./Common/global-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _stat: GlobalStateService) {
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
