import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWines(): any {
    return this.http.get('http://localhost:8383/wines');
  }

  getWineByName(name: string) {
    return this.http.get(`http://localhost:8383/wines/${name}`);
  }

  addWine(wine: any) {
    return this.http.post('http://localhost:8383/add-wine', wine);
  }
}
