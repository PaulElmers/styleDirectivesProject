import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <div [ngClass]="isDarkTheme ? 'dark-theme' : 'light-theme'">
      <h1>Theme Switcher</h1>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </div>
  `,
  styles: [`
    .light-theme { background-color: white; color: black; }
    .dark-theme { background-color: black; color: white; }
  `]
})
export class ThemeSwitcherComponent {
  isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
