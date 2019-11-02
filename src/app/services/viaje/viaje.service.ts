import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor() { }

  buscarEmpleados(nombreEmpleado) {
    
    return  [{
      id: '2',
      nombre: 'Leonardo Merchan',
    },];
  }

  buscarActividadPorEmpleado(idEmpleado){
    return  [{
      id: '5',
      nombre: 'Leonardo Merchan',
      fecha: '02/08/2019',
    },
    {
      id: '5',
      nombre: 'Leonardo Merchan',
      fecha: '08/09/2019',
    },
    {
      id: '5',
      nombre: 'Leonardo Merchan',
      fecha: '24/09/2019',
    },];
  }
}
