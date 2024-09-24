import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.quantity }}
      </li>
    </ul>
  `
})
export class ProductListComponent {
  products = [
    { name: 'Product 1', quantity: 10 },
    { name: 'Product 2', quantity: 5 },
    { name: 'Product 3', quantity: 15 }
  ];
}
