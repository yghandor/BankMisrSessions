import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainlayoutRoutingModule } from './mainlayout-routing.module';
import { MainlayoutComponent } from './mainlayout.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    MainlayoutComponent
  ],
  imports: [
    CommonModule,
    MainlayoutRoutingModule,
    ButtonModule
  ]
})
export class MainlayoutModule { }
