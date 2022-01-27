import { Routes } from '@angular/router';

export const Layout_content: Routes = [
  { 
    path: '',
    loadChildren: () => import('../pages/page.module').then(m => m.PageModule )
  },
]