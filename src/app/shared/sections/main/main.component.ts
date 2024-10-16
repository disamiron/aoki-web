import { Component } from '@angular/core';
import { ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public textSizes = TextSizes;

  public colorMap = ColorMap;
}
