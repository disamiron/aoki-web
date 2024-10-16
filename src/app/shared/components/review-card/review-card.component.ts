import { Component, Input } from '@angular/core';
import { UserReview } from '../../interfaces';
import { ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() userReviewImg: string | undefined;
  @Input() index: number = 0;

  public TextSizes = TextSizes;

  public ColorMap = ColorMap;
}
