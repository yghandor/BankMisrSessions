import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NTGGridComponent} from "./ntggrid.component";

import {TableModule} from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";

@NgModule({
  declarations: [NTGGridComponent],
  imports: [
    CommonModule, TableModule, ButtonModule, ConfirmDialogModule
  ], exports: [NTGGridComponent],
  providers: [ConfirmationService]
})
export class NTGGridModule {
}
