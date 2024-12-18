import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-janeiro',
  standalone: false,

  templateUrl: './janeiro.component.html',
  styleUrl: './janeiro.component.css'
})
export class JaneiroComponent {

    constructor(private router:Router){

    }

    navigateToJaneiroCreate(): void {
      this.router.navigate(['/janeiro/create'])
    }

}
