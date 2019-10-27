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
}
