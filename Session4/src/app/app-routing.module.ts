import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CalcComponent} from "./pages/calc/calc.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [

  {path : 'home', component : HomeComponent},
  {path : 'calc' , component : CalcComponent},
  {path : 'about', component : AboutComponent},
  {path : '**', redirectTo : 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
