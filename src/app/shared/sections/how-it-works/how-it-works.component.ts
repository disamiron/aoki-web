import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { howItWorksVideoArray } from '../../constants';
import { ColorMap, TextSizes } from '../../enums';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HowItWorksComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderImgRef') public sliderImgRef:
    | ElementRef<HTMLElement>
    | undefined;

  public currentSlide: number = 0;

  public slider: KeenSliderInstance | null = null;

  public apiService: VgApiService | null = null;

  public readonly TextSizes = TextSizes;

  public readonly ColorMap = ColorMap;

  public readonly howItWorksVideoArray: string[] = howItWorksVideoArray;

  public ngAfterViewInit() {
    if (this.sliderImgRef && this.sliderImgRef?.nativeElement) {
      this.slider = new KeenSlider(this.sliderImgRef?.nativeElement, {
        slideChanged: (s) => {
          this.apiService?.getMediaById('video' + this.currentSlide).pause();

          this.currentSlide = s.track.details.rel;

          this.apiService?.getMediaById('video' + this.currentSlide).play();
        },
      });
    }
  }

  public ngOnDestroy() {
    this.slider?.destroy();
  }

  public onPlayerReady(event: VgApiService | undefined) {
    if (event) {
      this.apiService = event;
      this.apiService.fsAPI.isFullscreen = false;
      this.apiService.getMediaById('video' + this.currentSlide).play();
    }
  }
}
