import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-modal-usuario',
  standalone: true,
  imports: [],
  templateUrl: './modal-usuario.component.html',
  styleUrl: './modal-usuario.component.css',
})
export class ModalUsuarioComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() funcao: string = '';
  @Output('modalClose') onClick = new EventEmitter();

  constructor(private AuthService: AuthService) {}

  modalClose() {
    this.onClick.emit();
  }

  currentUser = JSON.parse(this.AuthService.getCurrentUser()!);

  exibirBotoes() {
    if (
      this.currentUser.nivel === 'Fraga' ||
      this.currentUser.email === this.email ||
      (this.currentUser.nivel === 'ADM' &&
        (this.funcao === 'ADM' || this.funcao === 'Cliente'))
    ) {
      return true;
    }

    return false;
  }
}
