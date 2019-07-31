import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vehiculo } from '../models/vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoIdServiceService {

  constructor(private clienteHttp: HttpClient) {
    console.log("servicio de vehiculos iniciado");
   }

  obtenerInfoVehiculo(id: number) {
     return this.clienteHttp.get<Vehiculo[]>(`urlservicio/${id}`);
   }
}
