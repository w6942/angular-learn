import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'a11y', pathMatch: 'full' },
  { path: 'a11y', loadChildren: () => import('./pages/a11y/a11y.module').then(m => m.A11yModule) },
  { path: 'tree', loadChildren: () => import('./pages/tree/tree.module').then(m => m.TreeModule) },
  { path: 'portal', loadChildren: () => import('./pages/portal/portal.module').then(m => m.PortalModule) },
  { path: 'clipboard', loadChildren: () => import('./pages/clipboard/clipboard.module').then(m => m.ClipboardModule) },
  { path: 'table', loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule) },
  { path: 'overlay', loadChildren: () => import('./pages/overlay/overlay.module').then(m => m.OverlayModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
