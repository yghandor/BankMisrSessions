import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,MenubarModule,ButtonModule
  ], exports: [HeaderComponent]
})
export class HeaderModule {
}
