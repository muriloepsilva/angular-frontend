import { Injectable } from '@angular/core';
import { userInterface } from '../../../interfaces/user';
import { ExibicaoUsuariosComponent } from '../../pages/exibicao-usuarios/exibicao-usuarios.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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

  getCurrentUser(): string {
    return localStorage.getItem('loggedUser')!;
  }
}
