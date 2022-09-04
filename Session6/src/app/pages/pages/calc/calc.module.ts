import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';


@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule,
    CalcRoutingModule
  ]
})
export class CalcModule { }
