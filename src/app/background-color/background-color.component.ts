import { Component } from '@angular/core';

@Component({
  selector: 'app-background-color',
  template: `
    <div [ngStyle]="{'background-color': backgroundColor}" class="color-box">
      Background Color Box
    </div>
    <input [(ngModel)]="backgroundColor" placeholder="Enter HEX or RGB color">
  `,
  styles: ['.color-box { height: 100px; width: 100%; }']
})
export class BackgroundColorComponent {
  backgroundColor: string = '#ffffff';
}
