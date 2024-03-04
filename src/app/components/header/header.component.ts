import { Component } from '@angular/core';
import { LanguageService } from '../../services/toggle-languages.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  toggleLanguage() {
    this.languageService.toggleLanguage(); // Método para alternar o idioma no serviço de idioma
  }

  getText(textToTranslate: string): string {
    return this.languageService.getTranslation(textToTranslate);
  }

  toggleLanguageButton(event: any) {
    if (event.target.checked) {
      console.log('en');
      // Adicione aqui sua lógica para quando o idioma for alterado para "en"
    } else {
      console.log('pt');
      // Adicione aqui sua lógica para quando o idioma for alterado para "pt"
    }
  }

  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
