import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NTGGridComponent} from "./ntggrid.component";

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [NTGGridComponent],
  imports: [
    CommonModule,TableModule
  ], exports: [NTGGridComponent]
})
export class NTGGridModule {
}
