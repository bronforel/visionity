import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockItemsComponent } from "./block-items/block-items.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureComponent } from "./feature/feature.component";
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";
import { NgFor, NgIf } from '@angular/common';
import { LogopanelComponent } from "./logopanel/logopanel.component";

export interface BlockItem {
  blockID: number;
  blockTitle: string;
  blockIcon: string;
  blockDescription: string;
  blockImage: string;
  blockContent: BlockContent[];
}

export interface BlockContent {
  contentID: number;
  contentType: string;
  contentTitle: string;
  contentImage: string;
  contentDescription: string;
  blockItems?: BlockItem[];
}

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, RouterOutlet, BlockItemsComponent, FontAwesomeModule, FeatureComponent, ScrollToTopComponent, LogopanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'visionity';
  blockItems = blockItems;
  scrollHeight = 0;
  selectedBlockItem?: BlockItem | null = null;
 
  setScrollHeight(scrollHeight: number): void {
    this.scrollHeight = scrollHeight;
  }

  setSelectedBlockItem(blockItem?: BlockItem): void {
    this.selectedBlockItem = blockItem;
  }

}

const blockItems: BlockItem[] = [
  {
    blockID: 10,
    blockTitle: "Design",
    blockIcon: "faMarker",
    blockDescription: "Creatieve designs die een sterke en unieke identiteit uitstralen.",
    blockImage: "image_design.jpg",
    blockContent: [{
      contentID: 10,
      contentTitle: "Maak de volgende stap met een unieke en sterke identiteit",
      contentDescription: "",
      contentImage: "image_design.jpg",
      contentType: "default"
    }]
  },
  {
    blockID: 20,
    blockTitle: "Consultancy",
    blockIcon: "faGear",
    blockDescription: "Ervaren in strategie en advies voor het bereiken van ambitieuze doelen.",
    blockImage: "image_consult.jpg",
    blockContent: [{
      contentID: 10,
      contentTitle: "Ervaren in strategie en advies voor het bereiken van ambitieuze doelen.",
      contentDescription: "",
      contentImage: "image_consult.jpg",
      contentType: "default"
    }]
  },
  {
    blockID: 30,
    blockTitle: "Management",
    blockIcon: "faListCheck",
    blockDescription: "Expertise in productmanagement. Naadloze aansluiting op de markt.",
    blockImage: "image_product.jpg",
    blockContent: [{
      contentID: 30,
      contentTitle: "Expertise in productmanagement. Naadloze aansluiting op de markt.",
      contentDescription: "",
      contentImage: "image_product.jpg",
      contentType: "default"
    }]
  },
  {
    blockID: 40,
    blockTitle: "Contact",
    blockIcon: "faCoffee",
    blockDescription: "Geinteresseerd en meer weten? De koffie staat klaar!",
    blockImage: "image_contact.jpg",
    blockContent: [{
      contentID: 40,
      contentTitle: "Geinteresseerd en meer weten? De koffie staat klaar!",
      contentDescription: "",
      contentImage: "image_contact.jpg",
      contentType: "default"
    }]

  },
]

