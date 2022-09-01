import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NTGButtonDirective} from './ntgbutton.directive';
import { RoundNumbersPipe } from './round-numbers.pipe';


@NgModule({
  declarations: [
    NTGButtonDirective,
    RoundNumbersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NTGButtonDirective,RoundNumbersPipe]
})
export class NtglibModule {
}
