import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cadstroentrada',
  standalone: false,

  templateUrl: './cadstroentrada.component.html',
  styleUrl: './cadstroentrada.component.css'
})
export class CadstroentradaComponent {

  constructor(private router:Router){

  }


  navigateToEntradaCreate(): void {
    this.router.navigate(['/entrada/create'])
  }
}
