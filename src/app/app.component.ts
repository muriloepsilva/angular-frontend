import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LanguageService } from './services/toggle-languages.service';
import { ToggleLanguageComponent } from './tools/toggle-language/toggle-language.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginCardComponent, ToggleLanguageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
