import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import {FormsModule} from "@angular/forms";
import {NtglibModule} from "../../Common/ntglib/ntglib.module";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    NtglibModule
  ]
})
export class OrderModule { }
