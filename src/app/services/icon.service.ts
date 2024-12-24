import { Injectable } from '@angular/core';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, fas } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor() {
    library.add(fas);
  }

  getIcon(iconName?: string): IconDefinition {
    const icon = iconName || 'dummy';
    return fas[icon] || faQuestionCircle;
  }
}