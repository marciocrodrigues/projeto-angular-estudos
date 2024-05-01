import { Injectable } from "@angular/core";
import { LoginModel } from "../../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public efetuarLogin(model: LoginModel) {
    localStorage.setItem('@user-loggged', JSON.stringify(model));
  }

  public validarLogin() {
    const usuarioLogged = localStorage.getItem('@user-loggged');
    return usuarioLogged !== undefined && usuarioLogged !== null && usuarioLogged !== '';
  }
}