import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-style',
  template: `
    <div [ngClass]="{'hovered': isHovered}" 
         (mouseenter)="isHovered = true" 
         (mouseleave)="isHovered = false">
      Hover over me!
    </div>
  `,
  styles: ['.hovered { background-color: yellow; }']
})
export class HoverStyleComponent {
  isHovered: boolean = false;
}
