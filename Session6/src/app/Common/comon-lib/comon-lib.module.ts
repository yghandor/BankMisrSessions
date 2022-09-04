import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorButtonsDirective } from './color-buttons.directive';



@NgModule({
  declarations: [
    ColorButtonsDirective
  ],
  imports: [
    CommonModule
  ],exports:[ColorButtonsDirective]
})
export class ComonLibModule { }
