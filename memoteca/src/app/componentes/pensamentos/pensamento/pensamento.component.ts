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
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : '';
  }

}
