import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Janeiro } from './janeiro.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JaneiroService {

  baseUrl = 'http://localhost:8081/janeiro'

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
     duration: 3000,
     horizontalPosition: 'right',
     verticalPosition: 'top'
    })
   }

   create(janeiro: Janeiro): Observable<Janeiro>{
    const url = `${this.baseUrl}/salvar`;
    return this.http.post<Janeiro>(url, janeiro).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao salvar lançamento referente ao mês de Janeiro');
        }
      })
    );
  }

  read(): Observable<Janeiro[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Janeiro[]>(url);
  }

  readById(id: string): Observable<Janeiro> {
    const url = `${this.baseUrl}/buscar/${id}`;
    return this.http.get<Janeiro>(url);
  }

  update(janeiro: Janeiro): Observable<Janeiro> {
    const url = `${this.baseUrl}/editar`;
    return this.http.put<Janeiro>(url, janeiro).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          const errorMessage = error.error;
          console.error(errorMessage);
          return throwError(errorMessage);
        } else {
          return throwError('Erro ao criar lançamento de janeiro');
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
          return throwError('Erro ao excluir Apontamento');
        }
      })
    );
  }
}
