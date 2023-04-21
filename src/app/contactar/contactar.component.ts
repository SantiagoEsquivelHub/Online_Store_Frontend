import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css'],
})
export class ContactarComponent implements OnInit {
  message = {};
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.get('contactar').subscribe((message) => {
      this.message = message;
    });
  }
}
