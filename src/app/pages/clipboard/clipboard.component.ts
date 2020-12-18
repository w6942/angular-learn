import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClipboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
