import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterModule} from "./Components/footer/footer.module";
import {HeaderModule} from "./Components/header/header.module";
import {HomeModule} from "./pages/home/home.module";
import {AboutModule} from "./pages/about/about.module";

@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,FooterModule,HeaderModule,HomeModule,AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
