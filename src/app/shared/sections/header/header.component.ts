import { Component } from '@angular/core';
import { headerLinksCodes } from '../../constants';
import { Buttons, ColorMap, TextSizes } from '../../enums';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headerLinksCodes = headerLinksCodes;

  public Buttons = Buttons;

  public isMenuOpen: boolean = false;

  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  constructor(private translocoService: TranslocoService) {}

  public setActiveLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
