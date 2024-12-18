import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './components/template/nav/nav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CadstroentradaComponent } from './views/cadstroentrada/cadstroentrada.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { EntradacreateComponent } from './components/entrada/entradacreate/entradacreate.component';
import {  HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EntradareadComponent } from './components/entrada/entradaread/entradaread.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EntradaupdateComponent } from './components/entrada/entradaupdate/entradaupdate.component';
import { EntradadeleteComponent } from './components/entrada/entradadelete/entradadelete.component';
import { GastofixocreateComponent } from './components/gastofixo/gastofixocreate/gastofixocreate.component';
import { CadastrogastofixoComponent } from './views/cadastrogastofixo/cadastrogastofixo.component';
import { GastofixoreadComponent } from './components/gastofixo/gastofixoread/gastofixoread.component';
import { GastofixoupdateComponent } from './components/gastofixo/gastofixoupdate/gastofixoupdate.component';
import { GastofixodeleteComponent } from './components/gastofixo/gastofixodelete/gastofixodelete.component';
import { JaneiroComponent } from './views/janeiro/janeiro.component';
import { JaneirocreateComponent } from './components/janeiro/janeirocreate/janeirocreate.component';
import { MatSelectModule } from '@angular/material/select';
import { JaneiroreadComponent } from './components/janeiro/janeiroread/janeiroread.component';
import { JaneiroupdateComponent } from './components/janeiro/janeiroupdate/janeiroupdate.component';
import { JaneirodeleteComponent } from './components/janeiro/janeirodelete/janeirodelete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CadstroentradaComponent,
    HomeComponent,
    EntradacreateComponent,
    EntradareadComponent,
    EntradaupdateComponent,
    EntradadeleteComponent,
    GastofixocreateComponent,
    CadastrogastofixoComponent,
    GastofixoreadComponent,
    GastofixoupdateComponent,
    GastofixodeleteComponent,
    JaneiroComponent,
    JaneirocreateComponent,
    JaneiroreadComponent,
    JaneiroupdateComponent,
    JaneirodeleteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [


    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
