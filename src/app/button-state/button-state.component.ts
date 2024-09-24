import { Component } from '@angular/core';

@Component({
  selector: 'app-button-state',
  template: `
    <button 
      [ngStyle]="{'background-color': isActive ? 'green' : 'gray', 'color': isActive ? 'white' : 'black'}" 
      (click)="toggleState()">
      {{ isActive ? 'Active' : 'Inactive' }}
    </button>
  `
})
export class ButtonStateComponent {
  isActive: boolean = false;

  toggleState() {
    this.isActive = !this.isActive;
  }
}
