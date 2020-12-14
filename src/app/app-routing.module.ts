import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'a11y', loadChildren: () => import('./pages/a11y/a11y.module').then(m => m.A11yModule) },
  { path: 'tree', loadChildren: () => import('./pages/tree/tree.module').then(m => m.TreeModule) },
  { path: 'portal', loadChildren: () => import('./pages/portal/portal.module').then(m => m.PortalModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
