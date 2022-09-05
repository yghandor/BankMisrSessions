import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {CommonLibModule} from "../common-lib/common-lib.module";
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommonLibModule,
    RouterLinkWithHref
  ],exports : [HeaderComponent]
})
export class HeaderModule { }
