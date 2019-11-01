import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RutaService } from '../../../services/ruta/ruta.service';

@Component({
  selector: 'app-tablero-tiempos',
  templateUrl: './tablero-tiempos.component.html',
  styleUrls: ['./tablero-tiempos.component.scss']
})
export class TableroTiemposComponent implements OnInit {

  public buscarRutaForm: FormGroup;

  rutas: { id: string, nombre: string, direccionInicio: string, direccionFin: string; }[] = [];
  mostrarTabla: boolean = false;

  constructor(private rutaService: RutaService) { }

  ngOnInit() {
    this.buscarRutaForm = new FormGroup({
      nombreLugar: new FormControl(),
      nombreRuta: new FormControl()
    });
  }

  buscarRuta() {
    this.rutas = [{
      id: '1',
      nombre: 'mi ruta',
      direccionInicio: 'dir 1',
      direccionFin: 'dir 2',
    },];
    this.rutas = this.rutaService.buscarRutas(this.buscarRutaForm.get('nombreLugar').value, this.buscarRutaForm.get('nombreRuta').value)      
  }

}
