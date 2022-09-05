import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonLibModule} from "./Component/common-lib/common-lib.module";
import {HeaderModule} from "./Component/header/header.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,CommonLibModule,HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
