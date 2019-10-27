import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipo: string;

  constructor(private rolService: RoleService) {}

  ngOnInit() {
    this.tipo = this.rolService.getLoginRole();
  }
}
