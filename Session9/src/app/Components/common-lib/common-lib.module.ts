import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimationDirective} from './animation.directive';


@NgModule({
  declarations: [

    AnimationDirective
  ],
  imports: [
    CommonModule
  ], exports: [AnimationDirective]
})
export class CommonLibModule {
}
