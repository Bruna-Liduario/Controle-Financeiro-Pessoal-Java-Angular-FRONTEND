import { Component, ViewChild } from '@angular/core';
import { GastoFixo } from '../gastofixo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GastofixoService } from '../gastofixo.service';

@Component({
  selector: 'app-gastofixoread',
  standalone: false,

  templateUrl: './gastofixoread.component.html',
  styleUrl: './gastofixoread.component.css'
})
export class GastofixoreadComponent {

    gastosfixos: GastoFixo[] = []
    displayedColumns = ['id', 'gastofixo', 'valor','acao'];

    gastofixo = new MatTableDataSource<GastoFixo>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private gastofixoService: GastofixoService){}

    ngOnInit(): void {
      this.gastofixoService.read().subscribe(gastosfixos => {
        this.gastofixo.data = gastosfixos; // Atualiza os dados no dataSource
      });
    }

    ngAfterViewInit(): void {
      this.gastofixo.sort = this.sort;
      this.gastofixo.paginator = this.paginator;
    }

}
