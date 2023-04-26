import { Component, OnInit } from '@angular/core';
import { HabTec } from 'src/app/models/habilidadtecnica';

import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-habilidadesmod',
  templateUrl: './habilidadesmod.component.html',
  styleUrls: ['./habilidadesmod.component.css']
})
export class HabilidadesmodComponent implements OnInit{
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: HabTec[] = [];
  // Estas listas almacenan cada elemento con el mismo nivel o idioma (atributo: nivel_o_idioma)
  nivelAltoList: HabTec[] = [];
  nivelMedioList: HabTec[] = [];
  nivelBasicList: HabTec[] = [];
  idiomasList: HabTec[] = [];

  //Lo que tiene de especial este ngOnInit, es que le implemente un sistemda de clasificacion de elementos, segun tengan un "nivel_o_idioma" especifico. Esto con la finalidad que poder
  // mostrar a quienes corresponden a un mismo nivel/idioma en distintas secciones de la app.

  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabTec().subscribe(data => {
      this.miPortfolio = data;

      //data.filter() obtiene los elementos que cumplen con la condicion dentro de los parentesis
      //iterando sobre el Array almacenado en 'data'.
      //Como tenemos un this.nivelAltoList, si encuentra algun elemento que tiene como valor del atributo 'nivel_o_idioma' a 'alto', lo agrega a la lista.
      this.nivelAltoList = data.filter(item => item.nivel_o_idioma === "alto");
      this.nivelMedioList = data.filter(item => item.nivel_o_idioma === "medio");
      this.nivelBasicList = data.filter(item => item.nivel_o_idioma === "basic");
      this.idiomasList = data.filter(item => item.nivel_o_idioma === "idioma");
      
    })
  }

  onDelete(id: any) {
    //alert(id)
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarHabTec(id).subscribe( () => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }
}
