import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViajeService } from '../../../services/viaje/viaje.service';

@Component({
  selector: 'app-datos-uso-bicicletas',
  templateUrl: './datos-uso-bicicletas.component.html',
  styleUrls: ['./datos-uso-bicicletas.component.scss']
})
export class DatosUsoBicicletasComponent implements OnInit {

  public buscarEmpleadoForm: FormGroup;

  empleados: { id: string, nombre: string; }[] = [];
  viajes: { id: string, nombre: string, fecha: string; }[] = [];
  mostrarTabla: boolean = false;

  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
    this.buscarEmpleadoForm = new FormGroup({
      nombreLugar: new FormControl()
    });
  }

  buscarEmpleado() {    
    this.empleados = this.viajeService.buscarEmpleados(this.buscarEmpleadoForm.get('nombreLugar').value) 
  }

  buscarActividadPorEmpleado(idEmpleado) {
    this.mostrarTabla = true;
    this.viajes = this.viajeService.buscarActividadPorEmpleado(idEmpleado) 
  }

}
