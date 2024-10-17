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

  public readonly TextSizes = TextSizes;

  public readonly ColorMap = ColorMap;

  public readonly howItWorksVideoArray: string[] = howItWorksVideoArray;

  public ngAfterViewInit() {
    if (this.sliderImgRef && this.sliderImgRef?.nativeElement) {
      this.slider = new KeenSlider(this.sliderImgRef?.nativeElement, {
        slideChanged: (s) => {
          const prevVideo: HTMLVideoElement | undefined =
            document.getElementsByClassName(
              `number-slide${this.currentSlide}`
            )[0] as HTMLVideoElement;

          if (prevVideo) {
            prevVideo.pause();
          }

          this.currentSlide = s.track.details.rel;

          const currentVideo: HTMLVideoElement | undefined =
            document.getElementsByClassName(
              `number-slide${this.currentSlide}`
            )[0] as HTMLVideoElement;

          if (currentVideo) {
            currentVideo.currentTime = 0;
            currentVideo.play();
          }
        },
      });
    }
  }

  public ngOnDestroy() {
    this.slider?.destroy();
  }
}
