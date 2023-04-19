import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

// Este servicio sera el encargado de manejar la data del portfolio

@Injectable({
  providedIn: 'root'
})
export class DataPortfolioService {

  // API URL:
  //private urlAPI = 'http://localhost:5000/experiencia'; 
  private json = './assets/data/data.json';
  private bakcendDS9 = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  // Recordar que, como ahora con la API, cada componente necesita su ruta especifica del localhost, si en algun momento lo usamos sin el server, hay que especificar en los databinding del componente la ruta, como se hizo antes. Es decir, si ahora tenemos en la funcion del 'get', el localhost:5000/hero, si le sacamos el 'hero', hay que especificarlo en el componente como 'miPortfolio.hero.algo'.


  obtenerDatosHero(): Observable<Hero[]> {
    //return this.http.get(this.json) //para cuando no tenemos API, cargamos JSON local en Angular.
    // return this.http.get('http://localhost:5000/hero') //ese es el puerto que configuramos en el package.json para usarlo con una API (json-server)
    return this.http.get<Hero[]>(this.bakcendDS9 + "/hero/ver") 
    // 3 meses despues de haber hecho la configuracion en Angular, creamos nuestro backend en Java
    //con Spring Boot, Hibernate, JPA; y ahora si tenemos backend.
  }

  obtenerDatosSobreMi(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get('http://localhost:5000/sobreMi')
  }

  obtenerDatosExperiencia(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get(this.urlAPI)
  }

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get('http://localhost:5000/educacion')
  }

  obtenerDatosHabTec(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get('http://localhost:5000/habilidadesTecnicas')
  }

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get('./assets/data/dataflor.json')
    // return this.http.get('http://localhost:5000/proyectos')
  }

  obtenerDatosFooter(): Observable<any> {
    return this.http.get(this.json)
    // return this.http.get('http://localhost:5000/footer')
  }

}
