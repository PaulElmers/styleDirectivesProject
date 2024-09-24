import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  template: `
    <table>
      <tr *ngFor="let item of data">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  `
})
export class DataTableComponent {
  data = [
    { name: 'Item 1', value: 'Value 1' },
    { name: 'Item 2', value: 'Value 2' },
    { name: 'Item 3', value: 'Value 3' }
  ];
}
