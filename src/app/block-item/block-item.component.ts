
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockItem } from '../app.component';
import { IconService } from '../services/icon.service';
import { IconProp  } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-block-item',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './block-item.component.html',
  styleUrl: './block-item.component.scss'
})

export class BlockItemComponent implements OnInit {
  constructor(
    private iconService: IconService,
  ) {};

  @Input() blockItem?: BlockItem;
  @Input() isSelected: boolean = false;

  @Output() blockClosed = new EventEmitter<number>();
  
  faIcon: IconProp = 'question-circle';
  faClose = faClose

  ngOnInit() {
    const iconName = this.blockItem?.blockIcon
    this.faIcon = this.iconService.getIcon(iconName); 
  }

}
