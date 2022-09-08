import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserlistComponent} from './userlist/userlist.component';
import {NTGGridModule} from "../../../../Components/ntggrid/ntggrid.module";

import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NTGGridModule, ToastModule, HttpClientModule, ButtonModule
  ], providers: [MessageService]
})
export class UsersModule {
}
