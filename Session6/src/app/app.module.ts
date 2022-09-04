import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from 'primeng/sidebar';
import {ComonLibModule} from "./Common/comon-lib/comon-lib.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,ButtonModule,SidebarModule,ComonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
