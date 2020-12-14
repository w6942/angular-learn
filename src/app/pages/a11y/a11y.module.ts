import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yRoutingModule } from './a11y-routing.module';
import { A11yComponent } from './a11y.component';

@NgModule({
  declarations: [A11yComponent],
  imports: [
    CommonModule,
    A11yRoutingModule
  ]
})
export class A11yModule { }
