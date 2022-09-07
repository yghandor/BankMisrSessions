import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from "./mainlayout.component";

const routes: Routes = [

  {path: '', component: MainlayoutComponent, children: [


    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule {
}
