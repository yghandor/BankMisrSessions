import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {CommonLibModule} from "../common-lib/common-lib.module";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        CommonLibModule,
        RouterLinkWithHref,
        RouterLinkActive
    ],exports : [HeaderComponent]
})
export class HeaderModule { }
