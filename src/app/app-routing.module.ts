import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CadstroentradaComponent } from './views/cadstroentrada/cadstroentrada.component';
import { EntradacreateComponent } from './components/entrada/entradacreate/entradacreate.component';
import { EntradaupdateComponent } from './components/entrada/entradaupdate/entradaupdate.component';
import { EntradadeleteComponent } from './components/entrada/entradadelete/entradadelete.component';
import { GastofixocreateComponent } from './components/gastofixo/gastofixocreate/gastofixocreate.component';
import { CadastrogastofixoComponent } from './views/cadastrogastofixo/cadastrogastofixo.component';
import { GastofixoupdateComponent } from './components/gastofixo/gastofixoupdate/gastofixoupdate.component';
import { GastofixodeleteComponent } from './components/gastofixo/gastofixodelete/gastofixodelete.component';
import { JaneiroComponent } from './views/janeiro/janeiro.component';
import { JaneirocreateComponent } from './components/janeiro/janeirocreate/janeirocreate.component';
import { JaneiroupdateComponent } from './components/janeiro/janeiroupdate/janeiroupdate.component';
import { JaneirodeleteComponent } from './components/janeiro/janeirodelete/janeirodelete.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "entrada", component: CadstroentradaComponent },
  {path: "entrada/create", component: EntradacreateComponent},
  {path: "entrada/update/:id", component: EntradaupdateComponent},
  {path: "entrada/delete/:id", component: EntradadeleteComponent},

  {path: "gastofixo", component: CadastrogastofixoComponent },
  {path: "gastofixo/create", component: GastofixocreateComponent},
  {path: "gastofixo/update/:id", component: GastofixoupdateComponent},
  {path: "gastofixo/delete/:id", component: GastofixodeleteComponent},

  {path: "janeiro", component: JaneiroComponent },
  {path: "janeiro/create", component: JaneirocreateComponent},
  {path: "janeiro/update/:id", component: JaneiroupdateComponent},
  {path: "janeiro/delete/:id", component: JaneirodeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
