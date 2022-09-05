import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {PageNoteFoundComponent} from "./page-note-found/page-note-found.component";

const routes: Routes = [

  {
    path: 'main', component: PagesComponent, children: [

      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'designer', loadChildren: () => import('./designer/designer.module').then(m => m.DesignerModule)},
      {path: '**', component: PageNoteFoundComponent}

    ]
  },
  {path: '**', redirectTo: 'main'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
