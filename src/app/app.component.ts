import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { MENU_COLLAPSED, ESC } from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  collapsed$!: Observable<boolean>;

  ngOnInit(): void {
    this.toggleMenuMonitor();
  }

  ngOnDestroy() {


  }

  private toggleMenuMonitor(): void {
    const initialCollapsed: number = +(localStorage.getItem(MENU_COLLAPSED) || '');
    this.collapsed$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      filter(({key}) => key === ESC),
      map((_, index) => !((index + initialCollapsed) % 2)),
      tap(collapsed => localStorage.setItem(MENU_COLLAPSED, String(+collapsed))),
      startWith(!!initialCollapsed)
    )
  }


}
