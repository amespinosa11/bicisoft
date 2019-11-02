import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor() { }

  buscarRutas(nombreLugar, nombreRuta) {
    
    return  [{
      id: '2',
      nombre: 'Ascenso Alto de patios',
      direccionInicio: 'Carrera séptima',
      direccionFin: 'Alto de patios',
    },];
  }

  buscarTiemposPorRuta(idRuta){
    return  [{
      id: '5',
      nombre: 'Fabian Gonzalez',
      tiempo: 20,
      intentos: 7,
    },
    {
      id: '6',
      nombre: 'Leonardo Jimenez',
      tiempo: 30,
      intentos: 8,
    },];
  }
}
