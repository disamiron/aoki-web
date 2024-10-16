import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent {
  @Input() public img: string = 'keyboard_arrow_right';

  @Input() public disabled: boolean = false;

  @Input() public isMenuButton: boolean = false;
}
