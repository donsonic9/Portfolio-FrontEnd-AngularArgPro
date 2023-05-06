import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { SobreMi } from '../models/sobremi';
import { Experiencia } from '../models/experiencia';
import { Educacion } from '../models/educacion';
import { DescripcionEducacion } from '../models/descripcioneducacion';
import { HabTec } from '../models/habilidadtecnica';
import { Proyectos } from '../models/proyectos';
import { FraseContacto } from '../models/frasecontacto';
import { Contacto } from '../models/contacto';
import { User } from '../models/user';
import { Mensaje } from '../models/mensaje';

// Este servicio sera el encargado de manejar la data del portfolio

@Injectable({
  providedIn: 'root'
})
export class DataPortfolioService {

  // API URL:
  //private urlAPI = 'http://localhost:5000/experiencia'; 
  private json = './assets/data/data.json';
  private bakcendDS9 = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /* --------------------------------------- HERO --------------------------------------------- */
  public obtenerDatosHero(): Observable<Hero[]> {
    //return this.http.get(this.json) //para cuando no tenemos API, cargamos JSON local en Angular.
    // return this.http.get('http://localhost:5000/hero') //ese es el puerto que configuramos en el package.json para usarlo con una API (json-server)
    return this.http.get<Hero[]>(this.bakcendDS9 + "/hero/ver") 
    // 3 meses despues de haber hecho la configuracion en Angular, creamos nuestro backend en Java
    //con Spring Boot, Hibernate, JPA; y ahora si tenemos backend.
  }

  public editarHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.bakcendDS9 + `/hero/editar/`, hero, this.httpOptions);
  }

  //-------------------------------------- SOBRE MI ------------------------------------------------

  public obtenerDatosSobreMi(): Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>(this.bakcendDS9 +"/sobremi/ver");
  }

  public editarSobreMi(sobremi: SobreMi): Observable<SobreMi> {
    return this.http.put<SobreMi>(this.bakcendDS9 +`/sobremi/editar/`, sobremi, this.httpOptions);
  }

  //---------------------------------------- EXPERIENCIA -----------------------------------------


  public obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.bakcendDS9 +"/experiencia/ver")
  }

  public crearExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.bakcendDS9 +`/experiencia/crear/`, expe, this.httpOptions);
  }

  public editarExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.bakcendDS9 +`/experiencia/editar/`, expe, this.httpOptions);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.bakcendDS9 +"/experiencia/borrar" + id.toString());
  }


  //---------------------------------------- EDUCACION ------------------------------------------


  public obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.bakcendDS9 +"/educacion/ver")
  }

  public crearEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.bakcendDS9 +`/educacion/crear/`, edu, this.httpOptions);
  }

  public editarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.bakcendDS9 +`/educacion/editar/`, edu, this.httpOptions);
  }

  public borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.bakcendDS9 +"/educacion/borrar" + id.toString());
  }


  //                                      Descripcion Educacion

  public obtenerDatosDescripcionEducacion(): Observable<DescripcionEducacion[]> {
    return this.http.get<DescripcionEducacion[]>(this.bakcendDS9 +"/descripcioneducacion/ver")
  }

  public editarDescripcionEducacion(descedu: DescripcionEducacion): Observable<DescripcionEducacion> {
    return this.http.put<DescripcionEducacion>(this.bakcendDS9 +`/descripcioneducacion/editar/`, descedu, this.httpOptions);
  }


  //---------------------------------------- HABILIDADES TECNICAS --------------------------------


  public obtenerDatosHabTec(): Observable<HabTec[]> {
    return this.http.get<HabTec[]>(this.bakcendDS9 +"/habilidadtecnica/ver")
  }

  public crearHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.post<HabTec>(this.bakcendDS9 +`/habilidadtecnica/crear/`, hab, this.httpOptions);
  }

  public editarHabTec(hab: HabTec): Observable<HabTec> {
    return this.http.put<HabTec>(this.bakcendDS9 +`/habilidadtecnica/editar/`, hab, this.httpOptions);
  }

  public borrarHabTec(id: number): Observable<any> {
    return this.http.delete<any>(this.bakcendDS9 +"/habilidadtecnica/borrar" + id.toString());
  }

  //--------------------------------------- PROYECTOS --------------------------------------------


  public obtenerDatosProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.bakcendDS9 +"/proyectos/ver")
  }

  public crearProyectos(proy: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.bakcendDS9 +`/proyectos/crear/`, proy, this.httpOptions);
  }

  public editarProyectos(proy: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(this.bakcendDS9 +`/proyectos/editar/`, proy, this.httpOptions);
  }

  public borrarProyectos(id: number): Observable<any> {
    return this.http.delete<any>(this.bakcendDS9 +"/proyectos/borrar" + id.toString());
  }

  //------------------------------------- COMENTARIOS ------------------------------------------

  public obtenerDatosMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.bakcendDS9 +"/mensaje/ver")
  }

  public crearMensaje(men: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.bakcendDS9 + `/mensaje/crear/`, men, this.httpOptions)
  }

  public editarMensaje(men: Mensaje): Observable<Mensaje> {
    return this.http.put<Mensaje>(this.bakcendDS9 + `/mensaje/editar/`, men, this.httpOptions)
  }

  public borrarMensaje(id: number): Observable<any> {
    return this.http.delete<any>(this.bakcendDS9 +"/mensaje/borrar" + id.toString());
  }


  //------------------------------------- CONTACTO ----------------------------------------------

  //                                    Frase Contacto
  
  public obtenerDatosFraseContacto(): Observable<FraseContacto[]> {
    return this.http.get<FraseContacto[]>(this.bakcendDS9 +"/frasecontacto/ver")
  }

  public editarFraseContacto(fracon: FraseContacto): Observable<FraseContacto> {
    return this.http.put<FraseContacto>(this.bakcendDS9 +`/frasecontacto/editar/`, fracon, this.httpOptions);
  }
  
  //                                       Contacto                                               
  
  public obtenerDatosContacto(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.bakcendDS9 +"/contacto/ver")
  }

  public editarContacto(con: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(this.bakcendDS9 +`/contacto/editar/`, con, this.httpOptions);
  }

  //-----------------------------------------  USER  ---------------------------------------------

  public obtenerDatosUser(): Observable<User[]> {
    return this.http.get<User[]>(this.bakcendDS9 +"/user/ver")
  }

}
