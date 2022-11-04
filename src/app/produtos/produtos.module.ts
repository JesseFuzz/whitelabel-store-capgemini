import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProdutosComponent, DetalhesProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    // MatSnackBarModule,
  ],
})
export class ProdutosModule {}
