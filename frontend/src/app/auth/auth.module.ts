//Modulo  de Auth

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { PanelUsuarioComponent } from './pages/panel-usuario/panel-usuario.component';
import { EditarCuentaUsuarioComponent } from './pages/editar-cuenta-usuario/editar-cuenta-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    PanelUsuarioComponent,
    EditarCuentaUsuarioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
