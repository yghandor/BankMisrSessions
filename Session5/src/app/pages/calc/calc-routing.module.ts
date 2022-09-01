import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalcComponent} from "./calc.component";

const routes: Routes = [

  {path: "basic", component: CalcComponent},
  {path : '**', redirectTo : 'basic'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcRoutingModule {
}
