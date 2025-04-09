import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @HostBinding('style.borderStyle') @Input() border: 'solid' | 'dashed' = 'solid';

  constructor() {
  }
}
