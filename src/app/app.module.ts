import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // modulo boostrap

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SitiosComponent } from './sitios/sitios.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SitiosComponent,
    VehiculosComponent,
    RecordatoriosComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
