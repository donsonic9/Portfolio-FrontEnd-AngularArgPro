import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
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
      this.nivelAltoList = data.nivelAlto;
      this.nivelMedioList = data.nivelMedio;
      this.nivelBasicList = data.nivelBasic;
      this.idiomasList = data.idiomas;
    })
  }
}
