import { Router } from '@angular/router';
import { EntradaService } from './../entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from '../entrada.model';

@Component({
  selector: 'app-entradacreate',
  standalone: false,

  templateUrl: './entradacreate.component.html',
  styleUrl: './entradacreate.component.css'
})
export class EntradacreateComponent  implements OnInit{

  entrada: Entrada = {
    descricaoentrada: '',
  }

  constructor(private entradaService: EntradaService,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  createEntrada(): void {
    this.entradaService.create(this.entrada).subscribe(() => {
      this.entradaService.showMessage("Operação realizada com sucesso!")
      this.router.navigate(['/entrada'])
    })


  }
  cancelEntrada(): void {
    this.router.navigate(['/entrada'])
  }

}
