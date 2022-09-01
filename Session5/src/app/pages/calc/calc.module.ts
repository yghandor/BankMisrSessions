import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {NtglibModule} from "../../Common/ntglib/ntglib.module";

@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule,
    CalcRoutingModule,ButtonModule,InputTextModule,NtglibModule
  ]
})
export class CalcModule { }
