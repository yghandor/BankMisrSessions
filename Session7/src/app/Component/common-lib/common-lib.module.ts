import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlueBarComponent} from './blue-bar/blue-bar.component';


@NgModule({
  declarations: [
    BlueBarComponent
  ],
  imports: [
    CommonModule
  ], exports: [BlueBarComponent]
})
export class CommonLibModule {
}
