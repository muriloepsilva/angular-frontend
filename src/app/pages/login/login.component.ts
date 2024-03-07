import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../../tools/toggle-language/toggle-language.component';
import { ButtonComponent } from '../../tools/button/button.component';
import { InputComponent } from '../../tools/input/input.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageService } from '../../tools/toggle-language/services/toggle-languages.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authService/auth.service';
import { userInterface } from '../../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToggleLanguageComponent,
    ButtonComponent,
    InputComponent,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hidePassword: boolean = true;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  formLogin: FormGroup;
  constructor(
    private languageService: LanguageService,
    private authService: AuthService,
    private route: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  getText(textToTranslate: string): string {
    return this.languageService.getTranslation(textToTranslate, 'login-form');
  }

  loginUser() {
    const user: userInterface = this.authService.authenticate(
      this.formLogin.value.email,
      this.formLogin.value.senha
    );

    if (user) localStorage.setItem('loggedUser', JSON.stringify(user));

    this.route.navigate(['/usuarios']);
  }

  ngAfterViewInit(): void {
    if (this.authService.isAuthenticated()) {
      this.route.navigate(['/usuarios']);
    }
  }
}
