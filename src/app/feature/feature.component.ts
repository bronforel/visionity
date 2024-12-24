import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlockContent, BlockItem } from '../app.component';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent implements OnChanges {
  @Input() blockItem?: BlockItem;

  content?: BlockContent = this.blockItem?.blockContent[0];

  ngOnChanges(changes: SimpleChanges): void {
    // Controleer of blockItem is veranderd en stel content in
    if (changes['blockItem'] && this.blockItem) {
      this.content = this.blockItem.blockContent[0];
    }
  }

}
