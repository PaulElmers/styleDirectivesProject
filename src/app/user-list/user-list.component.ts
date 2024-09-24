import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <div *ngFor="let user of users" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  `
})
export class UserListComponent {
  users = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
    { name: 'User 3', email: 'user3@example.com' }
  ];
}
