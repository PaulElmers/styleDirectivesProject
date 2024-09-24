import { Component } from '@angular/core';

@Component({
  selector: 'app-active-item',
  template: `
    <ul>
      <li *ngFor="let item of items" 
          [ngStyle]="{'background-color': selectedItem === item ? 'blue' : 'transparent', 'color': selectedItem === item ? 'white' : 'black'}"
          (click)="selectItem(item)">
        {{ item }}
      </li>
    </ul>
  `
})
export class ActiveItemComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  selectedItem: string;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
