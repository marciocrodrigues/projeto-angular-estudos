import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './permissao/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FormularioContatosComponent } from './contatos/formulario-contatos/formulario-contatos.component';
import { autenticacaoGuard } from './services/guards/autenticacao.guard';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'', component: HomeComponent, canActivate: [autenticacaoGuard], children:
    [
      { path: 'contatos', component: ContatosComponent },
      { path: 'contatos/novo', component: FormularioContatosComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
