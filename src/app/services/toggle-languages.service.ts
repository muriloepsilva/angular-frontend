import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string = 'pt'; // Idioma padrão (inglês)
  private translations: any = {
    en: {
      // Traduções em inglês
      title: 'Welcome to My App',
      toggleLanguage: 'Change Language',
      // Outros textos...
    },
    pt: {
      // Traduções em português
      title: 'Bem-vindo ao Meu App',
      toggleLanguage: 'Trocar idioma',
      // Outros textos...
    },
    // Adicione mais idiomas e suas traduções conforme necessário
  };

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key] || '';
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en'; // Alternar entre inglês e português
  }
}
