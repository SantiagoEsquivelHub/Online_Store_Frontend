import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private host = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(this.host + path);
  }

}
