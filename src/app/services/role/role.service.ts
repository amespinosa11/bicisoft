import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private router: Router) {}

  getLoginRole() {
    const tipo = this.router.url.split('/')[2];
    return tipo;
  }

  setRole(producto: string, loginData: any) {
    console.log(loginData);
    const usuario = this.verificarIdentidad(loginData);
    if (usuario) {
      let num = 1;
      if (producto === 'ciudadbici') {
        num = 2;
      } else if (producto === 'bicitrip') {
        num = 3;
      }
      sessionStorage.setItem('r', num.toString());
      this.router.navigateByUrl('/bicisoft/geolocalizacion');
    } else {
      return 'Las credenciales no son correctas';
    }
  }

  getRole() {
    return JSON.parse(sessionStorage.getItem('r'));
  }

  verificarIdentidad(loginData: any) {
    if (loginData.user === 'admin' && loginData.password === '123') {
      return true;
    }
    return false;
  }
}
