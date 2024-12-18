import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrogastofixo',
  standalone: false,

  templateUrl: './cadastrogastofixo.component.html',
  styleUrl: './cadastrogastofixo.component.css'
})
export class CadastrogastofixoComponent {


    constructor(private router:Router){

    }


    navigateToGastoFixoCreate(): void {
      this.router.navigate(['/gastofixo/create'])
    }

}
