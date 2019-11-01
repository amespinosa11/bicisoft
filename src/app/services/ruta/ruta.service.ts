import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor() { }

  buscarRutas(nombreLugar, nombreRuta) {
    
    return  [{
      id: '2',
      nombre: 'mi ruta',
      direccionInicio: 'dir 1',
      direccionFin: 'dir 2',
    },];
  }
}
