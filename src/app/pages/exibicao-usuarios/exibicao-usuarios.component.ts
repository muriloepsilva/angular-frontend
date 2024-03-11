import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../../tools/toggle-language/toggle-language.component';
import { ButtonComponent } from '../../tools/button/button.component';
import { LanguageService } from '../../tools/toggle-language/services/toggle-languages.service';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../../tools/user-card/user-card.component';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-exibicao-usuarios',
  standalone: true,
  imports: [
    ToggleLanguageComponent,
    ButtonComponent,
    FontAwesomeModule,
    CommonModule,
    UserCardComponent,
  ],
  templateUrl: './exibicao-usuarios.component.html',
  styleUrl: './exibicao-usuarios.component.css',
})
export class ExibicaoUsuariosComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router,
    private authService: AuthService
  ) {}

  rightFromBracket = faRightFromBracket;

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  getText(textToTranslate: string): string {
    return this.languageService.getTranslation(
      textToTranslate,
      'exibicao-usuarios'
    );
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  public users = this.authService.users;
}
