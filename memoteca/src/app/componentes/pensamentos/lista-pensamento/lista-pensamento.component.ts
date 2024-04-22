import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/interface/pensamentos';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.scss']
})

export class ListaPensamentoComponent implements OnInit {

  public listaPensamentos: PensamentoModel[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: PensamentoModel[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  public ngOnInit(): void {
    this._pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe((result) => {
        this.listaPensamentos = result;
      });
  }

  public carregarMaisPensamentos(): void {
    this._pensamentoService.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  public carregarPensamentosFavoritos(): void {
    this.titulo = 'Meus Favoritos'
    this.paginaAtual = 1;
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this._pensamentoService.listar(this.paginaAtual, this.filtro, true)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
        this.listaFavoritos = listaPensamentos;
      });
  }

  public carregarPensamentosGerais(): void {
    this.titulo = 'Meu Mural';
    this.paginaAtual = 0;
    this.favoritos = false;
    this.haMaisPensamentos = true;
    this.listaPensamentos = [];
    this.carregarMaisPensamentos();
  }

  public pesquisarPensamentos(): void {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1
    this._pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe(result => {
        this.listaPensamentos = result
      });
  }

}
