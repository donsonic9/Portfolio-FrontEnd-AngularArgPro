import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { SobreMi } from '../models/sobremi';
import { Experiencia } from '../models/experiencia';
import { Educacion } from '../models/educacion';
import { DescripcionEducacion } from '../models/descripcioneducacion';
import { HabTec } from '../models/habilidadtecnica';

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

  /* ------------------------ Read, Update, HERO --------------------------------------------- */
  public obtenerDatosHero(): Observable<Hero[]> {
    //return this.http.get(this.json) //para cuando no tenemos API, cargamos JSON local en Angular.
    // return this.http.get('http://localhost:5000/hero') //ese es el puerto que configuramos en el package.json para usarlo con una API (json-server)
    return this.http.get<Hero[]>("/hero/ver") 
    // 3 meses despues de haber hecho la configuracion en Angular, creamos nuestro backend en Java
    //con Spring Boot, Hibernate, JPA; y ahora si tenemos backend.
  }

  public editarHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`/hero/editar/`, hero, this.httpOptions);
  }

  //-------------------------------------- SOBRE MI ------------------------------------------------

  public obtenerDatosSobreMi(): Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>("/sobremi/ver");
  }

  public editarSobreMi(sobremi: SobreMi): Observable<SobreMi> {
    return this.http.put<SobreMi>(`/sobremi/editar/`, sobremi, this.httpOptions);
  }

  //---------------------------------------- EXPERIENCIA -----------------------------------------


  public obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>("/experiencia/ver")
  }

  public crearExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`/experiencia/crear/`, expe, this.httpOptions);
  }

  public editarExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`/experiencia/editar/`, expe, this.httpOptions);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>("/experiencia/borrar" + id.toString());
  }


  //---------------------------------------- EDUCACION ------------------------------------------


  public obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>("/educacion/ver")
  }

  public crearEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`/educacion/crear/`, edu, this.httpOptions);
  }

  public editarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`/educacion/editar/`, edu, this.httpOptions);
  }

  public borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>("/educacion/borrar" + id.toString());
  }


  //                                      Descripcion Educacion

  public obtenerDatosDescripcionEducacion(): Observable<DescripcionEducacion[]> {
    return this.http.get<DescripcionEducacion[]>("/descripcioneducacion/ver")
  }

  public editarDescripcionEducacion(descedu: DescripcionEducacion): Observable<DescripcionEducacion> {
    return this.http.put<DescripcionEducacion>(`/descripcioneducacion/editar/`, descedu, this.httpOptions);
  }


  //---------------------------------------- HABILIDADES TECNICAS --------------------------------


  public obtenerDatosHabTec(): Observable<HabTec[]> {
    return this.http.get<HabTec[]>("/habilidadtecnica/ver")
  }

  public crearHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.post<HabTec>(`/habilidadtecnica/crear/`, hab, this.httpOptions);
  }

  public editarHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.put<HabTec>(`/habilidadtecnica/editar/`, hab, this.httpOptions);
  }

  public borrarHabTec(id: number): Observable<any> {
    return this.http.delete<any>("/habilidadtecnica/borrar" + id.toString());
  }

  //--------------------------------------- PROYECTOS --------------------------------------------

  obtenerDatosProyectos(): Observable<any> {
    return this.http.get(this.json)
    
  }

  obtenerDatosFooter(): Observable<any> {
    return this.http.get(this.json)
    
  }

}
