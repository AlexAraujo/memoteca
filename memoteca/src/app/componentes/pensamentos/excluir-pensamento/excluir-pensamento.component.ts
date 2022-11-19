import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/interface/pensamentos';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})

export class ExcluirPensamentoComponent implements OnInit {

  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this._pensamentoService.buscarPorId(parseInt(id!)).subscribe((result) => {
      this.pensamento = result
    })
  }

  public excluirPensamento(): void {
    if (this.pensamento.id == null) return;

    this._pensamentoService.excluir(this.pensamento.id).subscribe(() => {
      this._router.navigate(['/listarPensamento'])
    })
  }

  public cancelar(): void {
    this._router.navigate(['/listarPensamento'])
  }

}
