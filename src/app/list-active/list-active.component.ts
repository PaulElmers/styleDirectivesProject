import { Component } from '@angular/core';

@Component({
  selector: 'app-list-active',
  template: `
    <ul>
      <li *ngFor="let item of items" 
          [ngClass]="{'active': selectedItem === item}" 
          (click)="selectItem(item)">
        {{ item }}
      </li>
    </ul>
  `,
  styles: ['.active { background-color: blue; color: white; }']
})
export class ListActiveComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  selectedItem: string;

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
