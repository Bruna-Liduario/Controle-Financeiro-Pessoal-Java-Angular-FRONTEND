import { Component, OnInit } from '@angular/core';
import { GastoFixo } from '../gastofixo.model';
import { GastofixoService } from '../gastofixo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastofixocreate',
  standalone: false,

  templateUrl: './gastofixocreate.component.html',
  styleUrl: './gastofixocreate.component.css'
})
export class GastofixocreateComponent implements OnInit{

  gastosfixo: GastoFixo = {
    gastofixo: '',
    valor: 0.0
  }

  constructor(private gastoFixoService: GastofixoService,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  createGastoFixo(): void {
    this.gastoFixoService.create(this.gastosfixo).subscribe(() => {
      this.gastoFixoService.showMessage("Operação realizada com sucesso!")
      this.router.navigate(['/gastofixo'])
    })


  }
  cancelGastoFixo(): void {
    this.router.navigate(['/gastofixo'])
  }
}
