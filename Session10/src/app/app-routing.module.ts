import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./Guards/auth.guard";

const routes: Routes = [

  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/mainlayout/mainlayout.module').then(m => m.MainlayoutModule)
  },
  {path: 'auth', loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule)},
  {path: '**', redirectTo: 'pages'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
