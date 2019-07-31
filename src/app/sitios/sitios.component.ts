import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent implements OnInit {
  
  json = [{"id":1, "nombre":"CasaRenault", "tipo": 'Repuestos', "horario": "lunes a viernes / 08:00 - 18:00", "descripcion":"tienda de repuestos para automoviles en neiva.", "telefono":"8675643", "direccion": "Cra. 5 #2-49"},
  {"id":2, "nombre":"taller Pepo", "tipo": 'mantenimiento', "horario": "lunes a viernes / 08:00 - 18:00", "descripcion":"Taller para todo tipo de vehiculos", "telefono":"8675643", "direccion": "Cra. 5 #2-49"}];
  constructor() { }

  ngOnInit() {
  }

  panelContent(pc, ph) {
    if (pc.style.display == 'none') {
      pc.style.display = 'block';
    } else {
      pc.style.display = 'none';
    }
  }
}
