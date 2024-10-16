import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './sections/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { MaterialModule } from './material/material.module';
import { ImgComponent } from './components/img/img.component';
import { AboutComponent } from './sections/about/about.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { WhyOurAppComponent } from './sections/why-our-app/why-our-app.component';
import { AdvantagesComponent } from './sections/advantages/advantages.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
    ImgComponent,
    AboutComponent,
    HowItWorksComponent,
    WhyOurAppComponent,
    AdvantagesComponent,
    ReviewsComponent,
    CircleButtonComponent,
    ReviewCardComponent,
  ],
  imports: [CommonModule, MaterialModule, TranslocoRootModule],
  exports: [
    MaterialModule,
    TranslocoRootModule,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
    ImgComponent,
    AboutComponent,
    HowItWorksComponent,
    WhyOurAppComponent,
    AdvantagesComponent,
    ReviewsComponent,
    CircleButtonComponent,
    ReviewCardComponent,
  ],
})
export class SharedModule {}
