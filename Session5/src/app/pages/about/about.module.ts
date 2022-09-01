import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,ButtonModule,RippleModule
  ], exports: [AboutComponent]
})
export class AboutModule {
}
