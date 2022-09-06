import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {MessageModule} from 'primeng/message';
import {MessageService} from "primeng/api";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule, HttpClientModule, ToastModule, MessageModule
  ],
  declarations: [LoginComponent],
  providers: [MessageService]
})
export class LoginModule {
}
