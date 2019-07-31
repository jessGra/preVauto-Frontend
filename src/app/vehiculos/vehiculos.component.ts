import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  respuestaLogin = [
    {'idUser':1,'nombre: ': 'jose', 'foto': 'foto1',
    'vehiculos': [{'id':'vehiculo1','nombre':'el bulloso','foto':'foto1'}] , 
    'alertas': [{'id': 'alerta1', 'body':'alerta de vencimiento pase'}] }];

  constructor() { }

  ngOnInit() {
    console.log(this.respuestaLogin[0]['nombre: ']);
  }

}
