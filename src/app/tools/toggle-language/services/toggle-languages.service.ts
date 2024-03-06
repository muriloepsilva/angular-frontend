import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string = 'pt';
  private translations: any = {
    en: {
      'login-form': {
        title: 'Log in to the platform',
        inputPassword: 'Password',
        enterButton: 'Log in',
        showPassword: 'Show password',
      },
    },
    pt: {
      'login-form': {
        title: 'Entre na plataforma',
        inputPassword: 'Senha',
        enterButton: 'Entrar',
        showPassword: 'Mostrar senha',
      },
    },
  };

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getTranslation(key: string, component: string): string {
    console.log(this.currentLanguage);
    return this.translations[this.currentLanguage][component][key] || '';
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
  }
}
