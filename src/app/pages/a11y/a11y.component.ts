import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-a11y',
  templateUrl: './a11y.component.html',
  styleUrls: ['./a11y.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class A11yComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
