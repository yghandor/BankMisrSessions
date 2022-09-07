import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import {AuthPageComponent} from "./auth-page.component";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {CommonLibModule} from "../../Components/common-lib/common-lib.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    CheckboxModule, ButtonModule, InputTextModule, RippleModule, FormsModule,
    CommonLibModule,HttpClientModule
  ]
})
export class AuthPageModule { }
