import { PensamentoService } from '../pensamento.service';
import { PensamentoModel } from './../../../interface/pensamentos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})

export class PensamentoComponent implements OnInit {

  @Input() pensamento: PensamentoModel = {
    id: 1,
    conteudo: 'I love sugger',
    autoria: 'gaymer',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: PensamentoModel[] = [];

  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  ngOnInit(): void {
  }

  public larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : '';
  }

  public mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false)
      return 'inativo';

    return 'ativo';
  }

  public atualizarFavoritos(): void {
    this._pensamentoService.mudarFavorito(this.pensamento)
      .subscribe(result => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
      });
  }
}
