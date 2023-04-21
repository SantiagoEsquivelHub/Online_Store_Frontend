import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styleUrls: ['./buscar-productos.component.css'],
})
export class BuscarProductosComponent implements OnInit {
  message = {};
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.get('busqueda').subscribe((message) => {
      this.message = message;
    });
  }

  
}
