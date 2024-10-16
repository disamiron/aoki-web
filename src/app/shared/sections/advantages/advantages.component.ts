import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  public readonly TextSizes = TextSizes;

  public readonly ColorMap = ColorMap;

  public readonly Buttons = Buttons;
}
