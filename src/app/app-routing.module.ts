import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitiosComponent } from './sitios/sitios.component';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


const routes: Routes = [
  {
    path: '', component: VehiculosComponent
  },
  {
    path: 'vehiculos', component: VehiculosComponent
  },
  {
    path: 'sitios', component: SitiosComponent
  },
  {
    path: 'recordatorios', component: RecordatoriosComponent
  },
  {
    path: 'vehiculo', component: VehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
