import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {

  //Se crea el formulario con su nombre y validadores.
  formulario: FormGroup = this.fb.group({
    email: ['test@gmail.com', [Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  //Verificar si el campo tiene errores cuando se ha movido de  el
  campoEsValido(campo: string) {
    return (
      this.formulario.controls[campo].errors && this.formulario.controls[campo].touched
    );
  }

  //Funcion de login
  login() {
    console.log(this.formulario.value);
    console.log(this.formulario.valid);
  }
}
