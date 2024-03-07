import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() funcao: string = '';

  arrowUpRightFromSquare = faArrowUpRightFromSquare;

  test() {
    console.log(this.nome);
    console.log(this.email);
    console.log(this.funcao);
  }
}
