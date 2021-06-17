import { EditarCuentaUsuarioComponent } from './pages/editar-cuenta-usuario/editar-cuenta-usuario.component';
import { PanelUsuarioComponent } from './pages/panel-usuario/panel-usuario.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { RegistroComponent } from './pages/registro/registro.component';
//Modulo de las rutas de Auth

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  //Definición de las rutas  de  Auth
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {path : 'registro', component : RegistroComponent},
      {path : 'recuperarPassword', component : RecuperarPasswordComponent},
      {path : 'panel-usuario/:id?', component : PanelUsuarioComponent},
      {path : 'editar-datos-usuario/:id?', component : EditarCuentaUsuarioComponent},
      { path: '**', redirectTo: 'login' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
