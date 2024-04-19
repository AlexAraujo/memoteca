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
  filtro: string = 'Fresco';

  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  ngOnInit(): void {
    this._pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe((result) => {
        this.listaPensamentos = result;
      });
  }

  carregarMaisPensamentos() {
    this._pensamentoService.listar(++this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1
    this._pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe(result => {
        this.listaPensamentos = result
      });
  }

}
