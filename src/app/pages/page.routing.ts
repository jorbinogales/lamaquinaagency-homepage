import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home', 
        loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'team', 
        loadChildren: () => import('src/app/pages/team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'contact', 
        loadChildren: () => import('src/app/pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'nosotros', 
        loadChildren: () => import('src/app/pages/nosotros/nosotros.module').then(m => m.NosotrosModule)
      },
      {
        path: 'portafolio', 
        loadChildren: () => import('src/app/pages/portafolio/portafolio.module').then(m => m.PortafolioModule)
      },
    ],
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }