import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-habilidadesmod',
  templateUrl: './habilidadesmod.component.html',
  styleUrls: ['./habilidadesmod.component.css']
})
export class HabilidadesmodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  // habilidadesList: any;
  nivelAltoList: any;
  nivelMedioList: any;
  nivelBasicList: any;
  idiomasList: any;
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabTec().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
      // this.habilidadesList = data.habilidadesTecnicas;
      this.nivelAltoList = data.habilidadesTecnicas.nivelAlto;
      this.nivelMedioList = data.habilidadesTecnicas.nivelMedio;
      this.nivelBasicList = data.habilidadesTecnicas.nivelBasic;
      this.idiomasList = data.habilidadesTecnicas.idiomas;
    })
  }
}
