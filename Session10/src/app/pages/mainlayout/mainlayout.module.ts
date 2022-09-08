import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainlayoutRoutingModule } from './mainlayout-routing.module';
import { MainlayoutComponent } from './mainlayout.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from 'primeng/menubar';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    MainlayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainlayoutRoutingModule,
    ButtonModule,MenubarModule
  ]
})
export class MainlayoutModule { }
