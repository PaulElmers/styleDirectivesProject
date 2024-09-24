import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  template: `
    <button (click)="isVisible = !isVisible">Toggle Visibility</button>
    <div [ngClass]="{'hidden': !isVisible}">This content is conditionally visible.</div>
  `,
  styles: ['.hidden { display: none; }']
})
export class ShowHideComponent {
  isVisible: boolean = true;
}
