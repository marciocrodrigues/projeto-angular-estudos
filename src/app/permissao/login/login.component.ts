import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  get f(): any {
    return this.formulario.controls;
  }

  private iniciarFormulario() {
    this.formulario = this.fb.group({
      Usuario: ['', [Validators.required]],
      Senha: ['', [Validators.required]]
    })
  }

  public salvar(): void {
    if (this.formulario.invalid) return;

    const params = this.formulario.getRawValue();
    localStorage.setItem('@user-loggged', JSON.stringify(params));
    this.router.navigate(['/home']);
  }
}
