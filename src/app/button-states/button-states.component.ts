import { Component } from '@angular/core';

@Component({
  selector: 'app-button-states',
  template: `
    <button [ngClass]="{'active': isActive1, 'inactive': !isActive1}" (click)="toggleActive1()">Button 1</button>
    <button [ngClass]="{'active': isActive2, 'inactive': !isActive2}" (click)="toggleActive2()">Button 2</button>
  `,
  styles: ['.active { background-color: green; } .inactive { background-color: red; }']
})
export class ButtonStatesComponent {
  isActive1: boolean = false;
  isActive2: boolean = false;

  toggleActive1() {
    this.isActive1 = !this.isActive1;
  }

  toggleActive2() {
    this.isActive2 = !this.isActive2;
  }
}
