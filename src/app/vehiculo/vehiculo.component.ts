import { Component, OnInit } from '@angular/core';

import {VehiculoIdServiceService} from '../vehiculo/vehiculo-id-service.service'; //importo servicio de busqueda de vehiculo x id


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  //atributos de la clase
  Vehiculo = []; // info del vehiculo del servicio
  id = 1;
  constructor(private vehiculoIdService: VehiculoIdServiceService) { }

  // obtener datos del vehiculo id service
  consultarInfoVehiculo() {
    this.vehiculoIdService.obtenerInfoVehiculo(this.id).subscribe(data => {
      this.Vehiculo = data;
    });
   }

  ngOnInit() {
    this.consultarInfoVehiculo();
  }
}
