import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role/role.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  tipo: number;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.tipo = this.roleService.getRole();
  }
}
