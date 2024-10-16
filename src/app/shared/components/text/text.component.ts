import { Component, Input } from '@angular/core';
import { ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() text: string = '';

  @Input() textSize: string = TextSizes.bigText;

  @Input() color: string = ColorMap.black;

  @Input() uppercase: boolean = false;

  @Input() opacity: number = 1;
}
