import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEcontradoComponent } from './nao-econtrado/nao-econtrado.component';

//aqui são as minhas rotas
const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },

  { path: '', redirectTo: 'produtos', pathMatch: 'full' }, //aqui estou definindo a página produtos como a raiz
  { path: '**', component: NaoEcontradoComponent }, //aqui é a página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
