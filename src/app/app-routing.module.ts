import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './permissao/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contantos/contatos.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent, children: [
      { path: 'contatos', component: ContatosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
