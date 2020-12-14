import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { IMenu } from '../../models/i-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  menus!: Array<IMenu>;
  canEdit$!: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {

    this.menus = this.getMenus();
    this.canEditMonitor();

  }

  drop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
    this.saveMenus(this.menus);
  }

  private getMenus(): Array<IMenu> {
    const menuStr: string | null = localStorage.getItem('menu');
    if (menuStr) {
      return JSON.parse(menuStr);
    }
    const initialMenus = [
      { title: 'Accessibility', url: 'a11y' },
      { title: 'Bidirectionality', url: 'bidi' },
      { title: 'Clipboard', url: 'clipboard' },
      { title: 'Drag and Drop', url: 'drag-drop' },
      { title: 'Layout', url: 'layout' },
      { title: 'Observers', url: 'observers' },
      { title: 'Overlay', url: 'overlay' },
      { title: 'Platform', url: 'platform' },
      { title: 'Portal', url: 'portal' },
      { title: 'Scrolling', url: 'scrolling' },
      { title: 'Stepper', url: 'stepper' },
      { title: 'Table', url: 'table' },
      { title: 'Text field', url: 'text-field' },
      { title: 'Tree', url: 'tree' },
    ];
    this.saveMenus(initialMenus);
    return initialMenus;
  }

  private saveMenus(menus: Array<IMenu>): void {
    localStorage.setItem('menu', JSON.stringify(menus));
  }

  private canEditMonitor(): void {
    const shiftDown: Observable<true> = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      filter(({key}) => key === 'Shift'),
      mapTo(true)
    );

    const shiftUp: Observable<false> = fromEvent<KeyboardEvent>(window, 'keyup').pipe(
      filter(({key}) => key === 'Shift'),
      mapTo(false)
    );

    this.canEdit$ = merge(shiftDown, shiftUp);
  }



}
