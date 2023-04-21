import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styleUrls: ['./buscar-productos.component.css'],
})
export class BuscarProductosComponent implements OnInit {
  message = {};
  message_response = [
    {
      model: 'gestionPedidos.articulos',
      pk: 1,
      fields: {
        nombre_articulo: 'prueba',
        seccion: 'prueba',
        precio: 1000,
      },
    },
    
  ];

  text_producto = '';
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.get('busqueda').subscribe((message) => {
      this.message = message;
    });
  }
  getText(event: any): void {
    this.text_producto += event.target.value;
  }

  submit(event: any): void {
    event.preventDefault();
    console.log('text_producto: ', this.text_producto);
    let body = {
      text_producto: this.text_producto,
    };

    this.dataSvc.post('busqueda/', body).subscribe((message) => {
      this.message = message;
      console.log('this.message: ', this.message);
    });
  }
}
