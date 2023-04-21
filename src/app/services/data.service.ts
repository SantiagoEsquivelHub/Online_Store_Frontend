import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private host = 'http://127.0.0.1:8000/';
  token = {};
  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(this.host + path);
  }

  getToken() {
    this.get('obtener_token').subscribe((token) => {
      this.token = token;
      console.log(this.token);
    });
  }

  post(path: string, body: object) {
    this.getToken();
    const headers = {
      'content-type': 'application/json',
      // 'X-CSRFToken': this.token,
    };
    const bodyJson = JSON.stringify(body);
    return this.http.post(this.host + path, bodyJson, { headers });
  }
}
