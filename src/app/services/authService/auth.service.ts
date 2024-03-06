import { Injectable } from '@angular/core';
import { userInterface } from '../../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private users: any = [
    {
      nome: 'Murilo',
      email: 'murilo.penha@fraga.com.br',
      senha: 'murilo123',
      nivel: 1,
    },
  ];

  authenticate(email: string, senha: string): userInterface {
    return this.users.find(
      (user: userInterface) => user.email === email && user.senha === senha
    );
  }

  isAuthenticated(): boolean {
    const usuario = JSON.parse(localStorage.getItem('loggedUser')!);

    if (usuario) return true;
    return false;
  }
}
