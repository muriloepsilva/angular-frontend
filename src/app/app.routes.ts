import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ExibicaoUsuariosComponent } from './pages/exibicao-usuarios/exibicao-usuarios.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: ExibicaoUsuariosComponent },
];
