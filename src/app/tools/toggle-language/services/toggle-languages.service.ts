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
        enterButton: 'Login',
        showPassword: 'Show password',
      },
      'exibicao-usuarios': {
        logoutButton: 'Logout',
        userListTitle: 'Plataform users',
      },
    },
    pt: {
      'login-form': {
        title: 'Entre na plataforma',
        inputPassword: 'Senha',
        enterButton: 'Entrar',
        showPassword: 'Mostrar senha',
      },
      'exibicao-usuarios': {
        logoutButton: 'Sair',
        userListTitle: 'Usuários da plataforma',
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
    return this.translations[this.currentLanguage][component][key] || '';
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
  }
}
