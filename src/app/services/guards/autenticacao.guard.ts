import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  if (inject(LoginService).validarLogin()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
