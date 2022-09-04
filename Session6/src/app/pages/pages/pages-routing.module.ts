import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [

  {
    path: 'all', component: PagesComponent, children: [

      {path: 'calc', loadChildren: () => import('./calc/calc.module').then(m => m.CalcModule)},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: '**', redirectTo: 'home'}


    ]
  },{path: '**',redirectTo : 'all'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
