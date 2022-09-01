import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports : [CalcComponent]
})
export class CalcModule { }
