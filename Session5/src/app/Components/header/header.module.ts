import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, SidebarModule, SlideMenuModule, MenuModule, MenubarModule
  ], exports: [HeaderComponent]
})
export class HeaderModule {
}
