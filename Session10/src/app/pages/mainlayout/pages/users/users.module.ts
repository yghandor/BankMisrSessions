import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserlistComponent} from './userlist/userlist.component';
import {NTGGridModule} from "../../../../Components/ntggrid/ntggrid.module";

import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {UserFormComponent} from './user-form/user-form.component';
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";

import {BlockUIModule} from 'primeng/blockui';


@NgModule({
  declarations: [
    UserlistComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NTGGridModule, ToastModule, HttpClientModule, ButtonModule, ConfirmDialogModule, DialogModule
    , InputTextModule, RippleModule, FormsModule, BlockUIModule
  ], providers: [MessageService]
})
export class UsersModule {
}
