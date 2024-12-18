import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Entrada } from './entrada.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor( private snackar: MatSnackBar,
    private http: HttpClient
  ) { }

  baseUrl = 'http://localhost:8081/entrada'

  showMessage(msg: string): void {
    this.snackar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(entrada: Entrada): Observable<Entrada>{
    const url = `${this.baseUrl}/salvar`;
    return this.http.post<Entrada>(url, entrada);
  }

  read(): Observable<Entrada[]>{
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Entrada[]>(url);
  }

  readById(id: string): Observable<Entrada> {
    const url = `${this.baseUrl}/buscar/${id}`
    return this.http.get<Entrada>(url)
  }

  update(entrada: Entrada): Observable<Entrada> {
    const url = `${this.baseUrl}/editar`; // Aqui não precisamos de ID na URL
    return this.http.put<Entrada>(url, entrada).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao atualizar entrada');
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
          return throwError('Você não tem permissão de excluir Entrada');
        }
      })
    );
  }



}
