import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../services/inventario/inventario.service';

@Component({
  selector: 'app-inventario-bicicletas',
  templateUrl: './inventario-bicicletas.component.html',
  styleUrls: ['./inventario-bicicletas.component.scss']
})
export class InventarioBicicletasComponent implements OnInit {
  inventarios: {
    nombre: string;
    identificacion: number;
    telefono: number;
    modelo: string;
    descripcion: string;
  }[] = [];
  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.inventarios = this.inventarioService.obtenerInventarios();
  }
}
