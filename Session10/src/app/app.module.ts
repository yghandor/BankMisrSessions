import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PrimeNGConfig} from "primeng/api";
import { ErrorPageComponent } from './pages/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent


  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
