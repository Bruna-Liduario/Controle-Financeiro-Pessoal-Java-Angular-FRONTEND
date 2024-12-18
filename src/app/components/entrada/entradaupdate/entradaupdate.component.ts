import { Component, OnInit } from '@angular/core';
import { Entrada } from '../entrada.model';
import { EntradaService } from '../entrada.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entradaupdate',
  standalone: false,

  templateUrl: './entradaupdate.component.html',
  styleUrl: './entradaupdate.component.css'
})
export class EntradaupdateComponent implements OnInit{

    entrada: Entrada = {
      descricaoentrada: '',
    }

    constructor(private entradaService: EntradaService,
      private router: Router,
      private route: ActivatedRoute
    ){}

    ngOnInit(): void {

      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.entradaService.readById(id).subscribe(entrada => {
          console.log('Entrada retornada do backend:', entrada);
          this.entrada = entrada;
        });
      } else {
        console.error('ID is null');
      }
    }


    updateEntrada(): void {
      if (this.entrada && this.entrada.id) {
        this.entradaService.update(this.entrada).subscribe({
          next: () => {
            this.entradaService.showMessage("Operação realizada com sucesso!");
            this.router.navigate(['/entrada']);
          },
          error: (err) => {
            console.error('Erro na atualização:', err);
            this.entradaService.showMessage(err);
          },
        });
      } else {
        console.error('ID da entrada é nulo ou indefinido. Objeto atual:', this.entrada);
      }
    }



    cancelEntrada(): void {
      this.router.navigate(['/entrada'])
    }

}



