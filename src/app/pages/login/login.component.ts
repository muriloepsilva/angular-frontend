import { Component } from '@angular/core';
import { LoginCardComponent } from '../../components/login-card/login-card.component';
import { ToggleLanguageComponent } from '../../tools/toggle-language/toggle-language.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginCardComponent, ToggleLanguageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
