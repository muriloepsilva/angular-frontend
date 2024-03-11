import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FontAwesomeModule, ModalUsuarioComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() funcao: string = '';

  arrowUpRightFromSquare = faArrowUpRightFromSquare;

  public modalIsOpen: boolean = false;
  changeModalState() {
    this.modalIsOpen = !this.modalIsOpen;
  }
}
