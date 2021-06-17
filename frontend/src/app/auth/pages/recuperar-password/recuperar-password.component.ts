import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  //Se crea el formulario con su nombre y validadores.
  formulario: FormGroup = this.fb.group({
    email: ['test@gmail.com', [Validators.required]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //Verificar si el campo tiene errores cuando se ha movido de  el
  campoEsValido(campo: string) {
    return (
      this.formulario.controls[campo].errors && this.formulario.controls[campo].touched
    );
  }
}
