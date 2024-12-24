import { Component, Inject, HostListener, EventEmitter, Output } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconService } from '../services/icon.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-scroll-to-top',
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent 
{
  @Output() windowScrollPositionEvent = new EventEmitter<number>();
  
  windowScrolled: boolean = false;
  faUp = faChevronUp;

  scrollHeight: number = 200;
  
  constructor(@Inject(DOCUMENT) private document: Document, private iconService: IconService) {}
  
  @HostListener("window:scroll", [])
  
  onWindowScroll() {
    this.windowScrolled = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > this.scrollHeight;
    this.windowScrollPositionEvent.emit(window.scrollY || document.documentElement.scrollTop || document.body.scrollTop);
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}