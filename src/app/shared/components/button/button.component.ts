import { Component, Input } from '@angular/core';
import { Buttons, TextSizes } from '../../enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';

  @Input() size: string = Buttons.big;

  @Input() isDisabled: boolean = false;

  @Input() reverseColor: boolean = false;

  public TextSizes = TextSizes;
}
