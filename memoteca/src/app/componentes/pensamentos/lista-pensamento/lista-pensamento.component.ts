import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.scss']
})
export class ListaPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      id: '2',
      conteudo: 'Aprendendo React',
      autoria: 'DevFeliz',
      modelo: 'modelo2'
    },
    {
      id: '3',
      conteudo: 'Aprendendo Javalixo',
      autoria: 'DevTriste',
      modelo: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
