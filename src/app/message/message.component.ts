import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="messageType === 'success'" class="success">Success Message!</div>
    <div *ngIf="messageType === 'error'" class="error">Error Message!</div>
    <div *ngIf="messageType === 'warning'" class="warning">Warning Message!</div>
  `
})
export class MessageComponent {
  messageType: string = 'success';
}
