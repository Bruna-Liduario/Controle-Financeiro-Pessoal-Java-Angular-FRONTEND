import { Component, OnInit } from '@angular/core';
import { Entrada } from '../entrada.model';
import { EntradaService } from '../entrada.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entradadelete',
  standalone: false,

  templateUrl: './entradadelete.component.html',
  styleUrl: './entradadelete.component.css'
})
export class EntradadeleteComponent implements OnInit{

  entradas: Entrada = {
    descricaoentrada: '',
  };

  constructor(
    private entradaService: EntradaService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entradaService.readById(id).subscribe((entrada) => {
        this.entradas = entrada;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteEntrada(): void {
    if (this.entradas && this.entradas.id) {
      this.entradaService.delete(this.entradas.id).subscribe({
        next: () => {
          this.entradaService.showMessage('Tipo de Entrada excluído com sucesso!');
          this.router.navigate(['/entrada']);
        },
        error: (err) => {
          this.entradaService.showMessage(err);
        },
      });
    } else {
      console.error('ID de entrada é nulo ou indefinido');
    }
  }


  cancelEntrada(): void {
    this.router.navigate(['/entrada']);
  }


}
