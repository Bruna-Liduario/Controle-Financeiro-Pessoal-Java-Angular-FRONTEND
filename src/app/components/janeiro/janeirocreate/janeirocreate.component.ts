import { Component, OnInit } from '@angular/core';
import { Janeiro } from '../janeiro.model';
import { Entrada } from '../../entrada/entrada.model';
import { GastoFixo } from '../../gastofixo/gastofixo.model';
import { JaneiroService } from '../janeiro.service';
import { Router } from '@angular/router';
import { EntradaService } from '../../entrada/entrada.service';
import { GastofixoService } from '../../gastofixo/gastofixo.service';

@Component({
  selector: 'app-janeirocreate',
  standalone: false,

  templateUrl: './janeirocreate.component.html',
  styleUrl: './janeirocreate.component.css'
})
export class JaneirocreateComponent implements OnInit{

  janeiros: Janeiro = {
    valorentrada: 0.00,
    gastovariavel: '',
    valorgastovariavel: 0.00,
    idEntrada: '',
    idGastoFixo: '',
  };


  entradas: Entrada[] = [];
  gastosfixo: GastoFixo[] = [];
  valorGastoFixo: number | null = null;

  constructor(
    private janeiroService: JaneiroService,
    private router: Router,

    private entradaService: EntradaService,
    private gastofixoService: GastofixoService,
  ) {}

  ngOnInit(): void {
    this.entradaService.read().subscribe((entrada) => {
      this.entradas = entrada;
    });
    this.gastofixoService.read().subscribe((gastofixo) => {
      this.gastosfixo = gastofixo;
    });

  }

  createJaneiro(): void {
    if (this.janeiros) {
      this.janeiroService.create(this.janeiros).subscribe({
        next: () => {
          this.janeiroService.showMessage('Apontamento salvo com sucesso');
          this.router.navigate(['/janeiro']);
        },
        error: (err) => {
          this.janeiroService.showMessage(err);
        },
      });
    } else {
      console.error('nulo ou indefinido');
    }
  }

  cancelJaneiro(): void {
    this.router.navigate(['/janeiro']);
  }

  onGastoFixoChange(id: string): void {
    const selectedGastoFixo = this.gastosfixo.find((gasto) => gasto.id === Number(id));
    this.valorGastoFixo = selectedGastoFixo ? selectedGastoFixo.valor : null;
  }

}
