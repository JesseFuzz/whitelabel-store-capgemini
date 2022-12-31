import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  //terei que passar o servico do carrinho para o construtor quando eu for instanciar o carrinho
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  removerProdutoCarrinho(produtoID: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoID
    );
    this.carrinhoService.removerProdutoCarrinho(produtoID);
  }
  comprar() {
    alert('Compra realizada com sucesso!');
    this.carrinhoService.limparCarrinho();

    this.router.navigate(['produtos']);
  }
}
