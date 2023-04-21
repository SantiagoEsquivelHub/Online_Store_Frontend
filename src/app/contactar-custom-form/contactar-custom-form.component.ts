import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contactar-custom-form',
  templateUrl: './contactar-custom-form.component.html',
  styleUrls: ['./contactar-custom-form.component.css'],
})
export class ContactarCustomFormComponent implements OnInit {
  message = {};
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.get('contactar1').subscribe((message) => {
      this.message = message;
    });
  }
}
