import { Component } from '@angular/core';
import { InputComponent } from '../../tools/input/input.component';
import { ButtonComponent } from '../../tools/button/button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../services/toggle-languages.service';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CommonModule, FontAwesomeModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})
export class LoginCardComponent {
  hidePassword: boolean = true;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  constructor(private languageService: LanguageService) {}

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  getText(textToTranslate: string): string {
    return this.languageService.getTranslation(textToTranslate, 'login-form');
  }
}
