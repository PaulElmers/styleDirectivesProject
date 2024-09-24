import { Component } from '@angular/core';

@Component({
  selector: 'app-login-status',
  template: `
    <div *ngIf="isLoggedIn; else loggedOutTemplate">
      Welcome back!
    </div>
    <ng-template #loggedOutTemplate>
      <div>Please log in.</div>
    </ng-template>
  `
})
export class LoginStatusComponent {
  isLoggedIn: boolean = false; 
}
