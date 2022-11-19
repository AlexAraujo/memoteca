import { PensamentoModel } from './../../interface/pensamentos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {

  private readonly url = 'http://localhost:3000/pensamentos'

  constructor(
    private _http: HttpClient
  ) { }

  public criar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this._http.post<PensamentoModel>(this.url, pensamento);
  }

  public listar(): Observable<PensamentoModel[]> {
    return this._http.get<PensamentoModel[]>(this.url);
  }

  public editar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    const urlApi = `${this.url}/${pensamento.id}`;
    return this._http.put<PensamentoModel>(urlApi, pensamento);
  }

  public excluir(id: number): Observable<PensamentoModel> {
    const urlApi = `${this.url}/${id}`;
    return this._http.delete<PensamentoModel>(urlApi);
  }

  public buscarPorId(id: number): Observable<PensamentoModel> {
    const urlApi = `${this.url}/${id}`;
    return this._http.get<PensamentoModel>(urlApi);
  }
}
