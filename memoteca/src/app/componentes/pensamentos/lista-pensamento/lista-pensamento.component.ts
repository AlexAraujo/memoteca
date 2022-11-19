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

  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  ngOnInit(): void {
    this._pensamentoService.listar().subscribe((result) => {
      this.listaPensamentos = result;
    });
  }

}
