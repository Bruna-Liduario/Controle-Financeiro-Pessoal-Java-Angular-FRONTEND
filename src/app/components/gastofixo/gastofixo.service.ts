import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GastoFixo } from './gastofixo.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastofixoService {

  constructor( private snackar: MatSnackBar,
    private http: HttpClient
  ) { }

  baseUrl = 'http://localhost:8081/gastofixo'

  showMessage(msg: string): void {
    this.snackar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(gastofixo: GastoFixo): Observable<GastoFixo>{
    const url = `${this.baseUrl}/salvar`;
    return this.http.post<GastoFixo>(url, gastofixo);
  }

  read(): Observable<GastoFixo[]>{
    const url = `${this.baseUrl}/lista`;
    return this.http.get<GastoFixo[]>(url);
  }

  readById(id: string): Observable<GastoFixo> {
    const url = `${this.baseUrl}/buscar/${id}`
    return this.http.get<GastoFixo>(url)
  }

  update(gastofixo: GastoFixo): Observable<GastoFixo> {
    const url = `${this.baseUrl}/editar`;
    return this.http.put<GastoFixo>(url, gastofixo).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao atualizar Gasto');
        }
      })
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/deletar/${id}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Você não tem permissão de excluir Gasto');
        }
      })
    );
  }
}
