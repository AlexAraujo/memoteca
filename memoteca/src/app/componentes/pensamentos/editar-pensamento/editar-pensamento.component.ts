import { PensamentoService } from './../pensamento.service';
import { PensamentoModel } from 'src/app/interface/pensamentos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})

export class EditarPensamentoComponent implements OnInit {

  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    this._pensamentoService.buscarPorId(parseInt(id!)).subscribe((result) => {
      this.pensamento = result;
    })
  }

  public editarPensamento(): void {
    this._pensamentoService.editar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento'])
    })
  }

  public cancelar(): void {
    this._router.navigate(['/listarPensamento'])
  }

}
