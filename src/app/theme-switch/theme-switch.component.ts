import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  template: `
    <div [ngSwitch]="theme">
      <div *ngSwitchCase="'light'" class="light-theme">Light Theme</div>
      <div *ngSwitchCase="'dark'" class="dark-theme">Dark Theme</div>
      <div *ngSwitchDefault>Select a theme</div>
    </div>
    <button (click)="toggleTheme()">Toggle Theme</button>
  `,
  styles: ['.light-theme { background-color: white; } .dark-theme { background-color: black; }']
})
export class ThemeSwitchComponent {
  theme: string = 'light';

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
