import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';
import { ShipComponent } from './ship/ship.component';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from "@angular/forms";
import {ContextMenuModule} from "primeng/contextmenu";

@NgModule({
  declarations: [
    DesignerComponent,
    ShipComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule, DialogModule, FormsModule, ContextMenuModule
  ]
})
export class DesignerModule { }
