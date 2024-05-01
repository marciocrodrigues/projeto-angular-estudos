import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public formularioLogin!: FormGroup;
  public formularioCadastro!: FormGroup;
  public cadastro = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  get fLogin(): any {
    return this.formularioLogin.controls;
  }

  private iniciarFormulario() {
    this.formularioLogin = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]]
    });

    this.formularioCadastro = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Nome: ['', [Validators.required]],
      Celular: ['', [Validators.required, Validators.min(11), Validators.max(11)]],
      Senha: ['', [Validators.required, Validators.max(10)]]
    })
  }

  public alterarLoginCadastro() {
    this.cadastro = !this.cadastro;
  }

  public salvar(): void {
    if (this.cadastro) {
      if (this.formularioCadastro.invalid) return;

      const params = this.formularioCadastro.getRawValue();
    } else {
      if (this.formularioLogin.invalid) return;

      const params = this.formularioLogin.getRawValue() as LoginModel;
      this.loginService.efetuarLogin(params);
      this.router.navigate(['/']);
    }
  }
}
