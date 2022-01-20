import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  readonly ROOT_URL: any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://random-data-api.com/api/coffee/random_coffee';
  }

  get() {
    return this.http.get(`${this.ROOT_URL}`);
  }
}