import { Component } from '@angular/core';
import { Janeiro } from '../janeiro.model';
import { JaneiroService } from '../janeiro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-janeirodelete',
  standalone: false,

  templateUrl: './janeirodelete.component.html',
  styleUrl: './janeirodelete.component.css'
})
export class JaneirodeleteComponent {

  janeiros: Janeiro = {
    valorentrada: 0.00,
    gastovariavel: '',
    valorgastovariavel: 0.00,
    idEntrada: '',
    idGastoFixo: '',
  };

      constructor(
        private janeiroService: JaneiroService,
        private router: Router,
        private route: ActivatedRoute) {}

      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.janeiroService.readById(id).subscribe((janeiro) => {
            this.janeiros = janeiro;
          });
        } else {
          console.error('ID is null');
        }
      }

      deleteLancamentoJaneiro(): void {
        if (this.janeiros && this.janeiros.id) {
          this.janeiroService.delete(this.janeiros.id).subscribe({
            next: () => {
              this.janeiroService.showMessage('Lancamento de Janeiro excluído com sucesso!');
              this.router.navigate(['/janeiro']);
            },
            error: (err) => {
              this.janeiroService.showMessage(err);
            },
          });
        } else {
          console.error('ID de Lançamento de Janeiro é nulo ou indefinido');
        }
      }


      cancelLancamentoJaneiro(): void {
        this.router.navigate(['/janeiro']);
      }

}
