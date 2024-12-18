import { Component, ViewChild } from '@angular/core';
import { Janeiro } from '../janeiro.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { JaneiroService } from '../janeiro.service';

@Component({
  selector: 'app-janeiroread',
  standalone: false,

  templateUrl: './janeiroread.component.html',
  styleUrl: './janeiroread.component.css'
})
export class JaneiroreadComponent {


  // Tabelas separadas para entradas, gastos fixos e gastos variáveis
  entradas: any[] = [];
  gastosFixos: any[] = [];
  gastosVariaveis: any[] = [];

  // DataSource para cada tabela
  entradasDataSource = new MatTableDataSource<any>();
  gastosFixosDataSource = new MatTableDataSource<any>();
  gastosVariaveisDataSource = new MatTableDataSource<any>();

  // Colunas de cada tabela
  displayedColumnsEntradas: string[] = ['descricaoEntrada', 'valorentrada', 'acao'];
  displayedColumnsGastosFixos: string[] = ['descricaogastofixo', 'valorgastofixo', 'acao'];
  displayedColumnsGastosVariaveis: string[] = ['gastovariavel', 'valorgastovariavel', 'acao'];

  // Somatórios
  totalEntrada: number = 0;
  totalGastoFixo: number = 0;
  totalGastoVariavel: number = 0;
  totalFinal: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private janeiroService: JaneiroService) {}

  ngOnInit(): void {
    this.janeiroService.read().subscribe(janeiro => {
      // Separando os dados nas três categorias
      this.entradas = janeiro.filter(item => item.descricaoEntrada);
      this.gastosFixos = janeiro.filter(item => item.descricaogastofixo);
      this.gastosVariaveis = janeiro.filter(item => item.gastovariavel);

      // Calculando as somas
      this.totalEntrada = this.entradas.reduce((sum, item) => sum + item.valorentrada, 0);
      this.totalGastoFixo = this.gastosFixos.reduce((sum, item) => sum + item.valorgastofixo, 0);
      this.totalGastoVariavel = this.gastosVariaveis.reduce((sum, item) => sum + item.valorgastovariavel, 0);

      // Calculando o total final
      this.totalFinal = this.totalEntrada - (this.totalGastoFixo + this.totalGastoVariavel);

      // Atualizando os DataSources
      this.entradasDataSource.data = this.entradas;
      this.gastosFixosDataSource.data = this.gastosFixos;
      this.gastosVariaveisDataSource.data = this.gastosVariaveis;
    });
  }

  ngAfterViewInit(): void {
    // Definindo o paginator e sort para cada tabela
    this.entradasDataSource.paginator = this.paginator;
    this.entradasDataSource.sort = this.sort;
    this.gastosFixosDataSource.paginator = this.paginator;
    this.gastosFixosDataSource.sort = this.sort;
    this.gastosVariaveisDataSource.paginator = this.paginator;
    this.gastosVariaveisDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    // Aplicando o filtro para todas as tabelas
    this.entradasDataSource.filter = filterValue.trim().toLowerCase();
    this.gastosFixosDataSource.filter = filterValue.trim().toLowerCase();
    this.gastosVariaveisDataSource.filter = filterValue.trim().toLowerCase();
  }

}
