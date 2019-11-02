import { Injectable } from '@angular/core';
import { MatTabBase } from '@angular/material/tabs/typings/tab';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor() { }

  obtenerInventarios(){
    return  [{
      nombre: 'Fabian Gonzalez',
      identificacion: 1095828406,
      telefono: 3184850788,
      modelo: 'MTB',
      descripcion: 'Bicicleta de montaña roja'
    },
    {
      nombre: 'Leonardo Jimenez',
      identificacion: 93293800,
      telefono: 3175760865,
      modelo: 'Ruta Verde',
      descripcion: 'Bicicleta de ruta verde'
    },];
  }
}
