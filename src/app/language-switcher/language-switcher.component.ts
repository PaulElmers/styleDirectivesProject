import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div [ngSwitch]="language">
      <div *ngSwitchCase="'en'">Hello!</div>
      <div *ngSwitchCase="'uk'">Привіт!</div>
      <div *ngSwitchDefault>Select a language</div>
    </div>
    <button (click)="toggleLanguage()">Toggle Language</button>
  `
})
export class LanguageSwitcherComponent {
  language: string = 'en';

  toggleLanguage() {
    this.language = this.language === 'en' ? 'uk' : 'en';
  }
}
