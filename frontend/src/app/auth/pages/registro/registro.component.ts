import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  //Se crea el formulario con su nombre y validadores.

  formulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.required]],
      direccion: ['', [Validators.required, Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'Test1',
      apellido: 'Test1',
      dni: '20202020',
      edad: '20',
      telefono: '2020',
      email: 'test@gmail.com',
      direccion: 'Por ahi',
    });
  }

  //Verificar si el campo tiene errores cuando se ha movido de  el
  campoEsValido(campo: string) {
    return (
      this.formulario.controls[campo].errors &&
      this.formulario.controls[campo].touched
    );
  }

  register() {
    console.log(this.formulario.value);
    console.log(this.formulario.valid);
  }
}
