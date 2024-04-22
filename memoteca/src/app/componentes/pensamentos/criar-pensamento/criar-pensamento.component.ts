import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PensamentoModel } from 'src/app/interface/pensamentos';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})

export class CriarPensamentoComponent implements OnInit {

  pensamento: PensamentoModel = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
    favorito: false
  }

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  public criarPensamento(): void {
    this._pensamentoService.criar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento']);
    })
  }

  public cancelarPensamento(): void {
    this._router.navigate(['/listarPensamento']);
  }
}
