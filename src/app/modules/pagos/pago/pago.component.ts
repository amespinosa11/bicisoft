import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {
  esEstudiante: boolean;
  pagoForm: FormGroup;
  mensajeErrorObligatorio = 'Este campo es obligatorio';
  codigo: string;

  constructor() {}

  ngOnInit() {
    this.esEstudiante = false;

    this.pagoForm = new FormGroup({
      valor: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      numeroTarjeta: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      codigo: new FormControl(''),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      cvv: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]+$')
      ]),
      fechaExpiracion: new FormControl('', [
        Validators.required,
        Validators.pattern('\\d{2}-\\d{2}')
      ])
    });

    this.pagoForm.controls.codigo.valueChanges.subscribe(codigo => {
      if (codigo.length > 7) {
        this.pagoForm.controls.valor.setValue(
          this.pagoForm.controls.valor.value * 0.7
        );
      }
    });
  }

  pagar() {
    Swal.fire(
      'Pago exitoso',
      'Hemos recibido el pago correctamente',
      'success'
    );
    this.pagoForm.get('numeroTarjeta').setValue('');
    this.pagoForm.get('nombre').setValue('');
    this.pagoForm.get('cvv').setValue('');
    this.pagoForm.get('fechaExpiracion').setValue('');
  }
}
