import { Component } from '@angular/core';

@Component({
  selector: 'app-message-type',
  template: `
    <div [ngSwitch]="messageType">
      <div *ngSwitchCase="'info'" class="info">Information message!</div>
      <div *ngSwitchCase="'success'" class="success">Success message!</div>
      <div *ngSwitchCase="'error'" class="error">Error message!</div>
      <div *ngSwitchDefault>Select a message type</div>
    </div>
  `
})
export class MessageTypeComponent {
  messageType: string = 'success';
}
