import { Component, OnInit, ViewChild } from '@angular/core';
import { EntradaService } from '../entrada.service';
import { Entrada } from '../entrada.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-entradaread',
  standalone: false,

  templateUrl: './entradaread.component.html',
  styleUrl: './entradaread.component.css'
})
export class EntradareadComponent implements OnInit {

    entradas: Entrada[] = []
    displayedColumns = ['id', 'descricaoentrada', 'acao'];

    entradadata = new MatTableDataSource<Entrada>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private entradaService: EntradaService){}

    ngOnInit(): void {
      this.entradaService.read().subscribe(entrada => {
        this.entradadata.data = entrada; // Atualiza os dados no dataSource
      });
    }

    ngAfterViewInit(): void {
      this.entradadata.sort = this.sort;
      this.entradadata.paginator = this.paginator;
    }
}
