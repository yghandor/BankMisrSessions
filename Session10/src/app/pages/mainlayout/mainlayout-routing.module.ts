import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainlayoutComponent} from "./mainlayout.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {
    path: '', component: MainlayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)},


      {path: 'error', loadChildren: () => import('../error-page/error-page.module').then(m => m.ErrorPageModule)},
      {path: '**', redirectTo: 'error'}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule {
}
