import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from '../../enums';
import { aokiMail } from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public Buttons = Buttons;

  public aokiMail: string = aokiMail;
}
