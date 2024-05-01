import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  constructor(
    private readonly router: Router
  ) {}
}
