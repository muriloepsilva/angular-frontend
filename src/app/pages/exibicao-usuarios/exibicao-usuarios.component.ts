import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../../tools/toggle-language/toggle-language.component';

@Component({
  selector: 'app-exibicao-usuarios',
  standalone: true,
  imports: [ToggleLanguageComponent],
  templateUrl: './exibicao-usuarios.component.html',
  styleUrl: './exibicao-usuarios.component.css',
})
export class ExibicaoUsuariosComponent {}
