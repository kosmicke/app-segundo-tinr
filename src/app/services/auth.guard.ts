// No arquivo "auth.guard.ts"
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
// Importa nosso serviço
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    // Solicita a injeção do nosso arquivo:
    private authService: AuthService
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    // Recupere os dados do usuário logado
    let loggedUser = this.authService.getLoggedUser()

    // Caso esteja logado retorne true
    if (loggedUser) {
      return true;
    }

    // Caso contrário retorna false e navega para tela de login
    else {
      console.log('Error 401');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
