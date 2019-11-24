import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role/role.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tipo: string;
  loginForm: FormGroup;
  mensajeErrorObligatorio = 'Este campo es obligatorio';
  invalidUser = false;

  constructor(private rolService: RoleService) {}

  ngOnInit() {
    this.tipo = this.rolService.getLoginRole();
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  iniciarSesion() {
    const msg = this.rolService.setRole(this.tipo, this.loginForm.value);
    if (msg) {
      this.invalidUser = true;
    } else {
      this.invalidUser = false;
    }
  }
}
