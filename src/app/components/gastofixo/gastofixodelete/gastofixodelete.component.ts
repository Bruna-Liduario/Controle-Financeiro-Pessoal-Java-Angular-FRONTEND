import { Component, OnInit } from '@angular/core';
import { GastoFixo } from '../gastofixo.model';
import { GastofixoService } from '../gastofixo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gastofixodelete',
  standalone: false,

  templateUrl: './gastofixodelete.component.html',
  styleUrl: './gastofixodelete.component.css'
})
export class GastofixodeleteComponent implements OnInit{


  gastosfixo: GastoFixo = {
    gastofixo: '',
    valor: 0.0
  }

    constructor(
      private gastoFixoService: GastofixoService,
      private router: Router,
      private route: ActivatedRoute) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.gastoFixoService.readById(id).subscribe((gastofixo) => {
          this.gastosfixo = gastofixo;
        });
      } else {
        console.error('ID is null');
      }
    }

    deleteGastoFixo(): void {
      if (this.gastosfixo && this.gastosfixo.id) {
        this.gastoFixoService.delete(this.gastosfixo.id).subscribe({
          next: () => {
            this.gastoFixoService.showMessage('Gasto Fixo excluído com sucesso!');
            this.router.navigate(['/gastofixo']);
          },
          error: (err) => {
            this.gastoFixoService.showMessage(err);
          },
        });
      } else {
        console.error('ID de gasto fixo é nulo ou indefinido');
      }
    }


    cancelGastoFixo(): void {
      this.router.navigate(['/gastofixo']);
    }


}
