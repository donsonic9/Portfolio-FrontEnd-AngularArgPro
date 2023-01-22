import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Este servicio sera el encargado de manejar la data del portfolio

@Injectable({
  providedIn: 'root'
})
export class DataPortfolioService {

  constructor(private http:HttpClient) { }

  obtenerMisDatos(): Observable<any> {
    return this.http.get('./assets/data/midata.json')
  }

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json')
  }
}
