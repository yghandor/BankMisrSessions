import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesguardGuard} from "./pages/pages/pagesguard.guard";

const routes: Routes = [

  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'pages',
    loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule),
    canActivate : [PagesguardGuard]
  },{path : '**',redirectTo : 'pages/all/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
