import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
