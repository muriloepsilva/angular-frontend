import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../../tools/toggle-language/toggle-language.component';
import { ButtonComponent } from '../../tools/button/button.component';
import { LanguageService } from '../../tools/toggle-language/services/toggle-languages.service';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../../tools/user-card/user-card.component';

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
    private router: Router
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

  public users: any = [
    {
      nome: 'Murilo Penha',
      email: 'murilo.penha@fraga.com.br',
      senha: 'murilo.penha',
      nivel: 'Fraga',
    },
    {
      nome: 'Cainã Giarola',
      email: 'caina.giarola@fraga.com.br',
      senha: 'caina.giarola',
      nivel: 'ADM',
    },
    {
      nome: 'Julio Viana',
      email: 'julio.viana@fraga.com.br',
      senha: 'julio.viana',
      nivel: 'Cliente',
    },
    {
      nome: 'Rafael Oliveira Silva',
      email: 'rafael.oliveira@fraga.com.br',
      senha: 'rafael.oliveira',
      nivel: 'Fraga',
    },
    {
      nome: 'Rafael Vellone de Carvalho',
      email: 'rafael.carvalho@fraga.com.br',
      senha: 'rafael.carvalho',
      nivel: 'ADM',
    },
    {
      nome: 'Murilo Silva',
      email: 'murilo.silva@fraga.com.br',
      senha: 'murilo.silva',
      nivel: 'Cliente',
    },
  ];
}
