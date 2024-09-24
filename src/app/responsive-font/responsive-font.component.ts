import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-responsive-font',
  template: `
    <div [ngStyle]="{'font-size': fontSize}">
      This text has responsive font size!
    </div>
  `,
  styles: ['div { transition: font-size 0.3s; }']
})
export class ResponsiveFontComponent {
  fontSize: string;

  constructor() {
    this.updateFontSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateFontSize(event.target.innerWidth);
  }

  updateFontSize(width: number) {
    this.fontSize = width < 768 ? '24px' : '16px';
  }
}
