import { Component, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { BlockItemComponent } from "../block-item/block-item.component";
import { NgFor, NgIf } from '@angular/common';
import { BlockItem } from '../app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-block-items',
  imports: [FontAwesomeModule, BlockItemComponent, NgFor, NgIf],
  templateUrl: './block-items.component.html',
  styleUrl: './block-items.component.scss'
})

export class BlockItemsComponent implements OnInit, OnDestroy, OnChanges {


  @Input() blockItems?: BlockItem[];
  @Input() scrollHeight: number = 0;
  @Output() selectedBlockEvent = new EventEmitter<BlockItem>();
  
  selectedBackgroundImage: string | null = null; 
  nextBackgroundImage = '';
  currentIndex = 0;
  autoChangeInterval: any;
  isHovered = false;
  isFading = false; 

  selectedBlockId: number | null = null;
  selectedBlock: BlockItem | null = null;

  gotoFeature(blockItem: BlockItem): void {
    this.selectedBlockEvent.emit(blockItem);
    this.toggleBlockHover(blockItem);

    // Wacht tot Angular klaar is met het renderen van #block-details
    setTimeout(() => {
      const element = document.getElementById('block-details-' + blockItem.blockID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 20);

//    location.href = "#block-details";
  }

  toggleBlockHover(blockItem?: BlockItem): void {
    if (blockItem !== undefined) {
      this.isHovered = true;
      this.selectedBackgroundImage = blockItem.blockImage;
      this.isFading = false; 
    } else {
      this.isHovered = false;
      this.startAutoChange();
    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['blockItems'] && this.blockItems && this.blockItems.length > 0) {
      this.currentIndex = 0;
      this.selectedBackgroundImage = this.blockItems[this.currentIndex].blockImage;
      this.startAutoChange();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.clearAutoChange();
  }

  startAutoChange() {
    this.clearAutoChange();
    this.autoChangeInterval = setInterval(() => {
      if (!this.isHovered && this.blockItems && this.scrollHeight < 200) {
        this.scheduleNextBackground();
      }
    }, 8000);
  }

  clearAutoChange() {
    if (this.autoChangeInterval) {
      clearInterval(this.autoChangeInterval);
      this.autoChangeInterval = null;
    }
  }


  scheduleNextBackground() {
    if (this.blockItems && this.blockItems.length > 0) {

      this.isFading = true;
      const nextIndex = (this.currentIndex + 1) % this.blockItems.length;
      this.nextBackgroundImage = this.blockItems[nextIndex].blockImage;
    }
  }

  onTransitionEnd() {
    if (this.isFading && this.blockItems) {

      this.isFading = false;
      this.currentIndex = (this.currentIndex + 1) % this.blockItems.length;
      this.selectedBackgroundImage = this.nextBackgroundImage;
    }
  }

}