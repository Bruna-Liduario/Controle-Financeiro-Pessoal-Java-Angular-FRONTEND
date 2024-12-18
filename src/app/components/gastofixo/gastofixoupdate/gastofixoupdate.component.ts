import { Component, OnInit } from '@angular/core';
import { GastoFixo } from '../gastofixo.model';
import { GastofixoService } from '../gastofixo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gastofixoupdate',
  standalone: false,

  templateUrl: './gastofixoupdate.component.html',
  styleUrl: './gastofixoupdate.component.css'
})
export class GastofixoupdateComponent implements OnInit {

  gastosfixo: GastoFixo = {
    gastofixo: '',
    valor: 0.0
  }

    constructor(private gastoFixoService: GastofixoService,
      private router: Router,
      private route: ActivatedRoute
    ){}


    ngOnInit(): void {

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.gastoFixoService.readById(id).subscribe(gastofixo => {
            console.log('Entrada retornada do backend:', gastofixo);
            this.gastosfixo = gastofixo;
          });
        } else {
          console.error('ID is null');
        }
    }


      updateGastoFixo(): void {
        if (this.gastosfixo && this.gastosfixo.id) {
          this.gastoFixoService.update(this.gastosfixo).subscribe({
            next: () => {
              this.gastoFixoService.showMessage("Operação realizada com sucesso!");
              this.router.navigate(['/gastofixo']);
            },
            error: (err) => {
              console.error('Erro na atualização:', err);
              this.gastoFixoService.showMessage(err);
            },
          });
        } else {
          console.error('ID da entrada é nulo ou indefinido. Objeto atual:', this.gastosfixo);
        }
      }



      cancelGastoFixo(): void {
        this.router.navigate(['/gastofixo'])
      }

}
