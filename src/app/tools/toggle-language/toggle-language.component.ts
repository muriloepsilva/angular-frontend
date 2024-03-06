import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from './services/toggle-languages.service';

@Component({
  selector: 'app-toggle-language',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './toggle-language.component.html',
  styleUrl: './toggle-language.component.css',
})
export class ToggleLanguageComponent {
  constructor(private languageService: LanguageService) {}

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  getText(textToTranslate: string): string {
    return this.languageService.getTranslation(textToTranslate, 'login-form');
  }

  toggleLanguageButton(event: any) {
    if (event.target.checked) {
    } else {
    }
  }

  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
