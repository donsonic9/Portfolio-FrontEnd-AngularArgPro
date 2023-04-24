import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { SobreMi } from '../models/sobremi';

// Este servicio sera el encargado de manejar la data del portfolio

@Injectable({
  providedIn: 'root'
})
export class DataPortfolioService {

  // API URL:
  //private urlAPI = 'http://localhost:5000/experiencia'; 
  private json = './assets/data/data.json';
  private bakcendDS9 = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  // Recordar que, como ahora con la API, cada componente necesita su ruta especifica del localhost, si en algun momento lo usamos sin el server, hay que especificar en los databinding del componente la ruta, como se hizo antes. Es decir, si ahora tenemos en la funcion del 'get', el localhost:5000/hero, si le sacamos el 'hero', hay que especificarlo en el componente como 'miPortfolio.hero.algo'.

  /* ------------------------ Read, Update, HERO --------------------------------------------- */
  public obtenerDatosHero(): Observable<Hero[]> {
    //return this.http.get(this.json) //para cuando no tenemos API, cargamos JSON local en Angular.
    // return this.http.get('http://localhost:5000/hero') //ese es el puerto que configuramos en el package.json para usarlo con una API (json-server)
    return this.http.get<Hero[]>("/hero/ver") 
    // 3 meses despues de haber hecho la configuracion en Angular, creamos nuestro backend en Java
    //con Spring Boot, Hibernate, JPA; y ahora si tenemos backend.
  }

  public buscarHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`/hero/buscar/${id}`)
  }

  public editarHero(hero: Hero): Observable<Hero> {
    console.log("Hero ya dentro de data-portfolio.service.ts");
    console.log(hero);
    
    return this.http.put<Hero>(`/hero/editar/`, hero, this.httpOptions);
  }


  

  //-------------------------------------- SOBRE MI ------------------------------------------------

  public obtenerDatosSobreMi(): Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>("/sobremi/ver")
    
  }

  public editarSobreMi(sobremi: SobreMi): Observable<SobreMi> {
    console.log("SobreMi ya dentro de data-portfolio.service.ts");
    console.log(sobremi);
    
    return this.http.put<SobreMi>(`/sobremi/editar/`, sobremi, this.httpOptions);
  }

  //---------------------------------------- EXPERIENCIA -----------------------------------------


  obtenerDatosExperiencia(): Observable<any> {
    return this.http.get(this.json)
    
  }

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get(this.json)
    
  }

  obtenerDatosHabTec(): Observable<any> {
    return this.http.get(this.json)
    
  }

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get(this.json)
    
  }

  obtenerDatosFooter(): Observable<any> {
    return this.http.get(this.json)
    
  }

}
