import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A11yComponent } from './a11y.component';

const routes: Routes = [
  { path: '', component: A11yComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A11yRoutingModule { }
