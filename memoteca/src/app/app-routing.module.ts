import { ListaPensamentoComponent } from './componentes/pensamentos/lista-pensamento/lista-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ListaPensamentoComponent
  },
  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component: ListaPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
