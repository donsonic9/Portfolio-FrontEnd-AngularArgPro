import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-educacionmod',
  templateUrl: './educacionmod.component.html',
  styleUrls: ['./educacionmod.component.css']
})
export class EducacionmodComponent {
   // definimos una variable para conectar el sv con el html, mediante data binding.
   miPortfolio: any;
   educacionList: any;
   certificadoList: any;
   constructor(private datosPortfolio:DataPortfolioService) { }
 
   ngOnInit(): void {
     this.datosPortfolio.obtenerDatos().subscribe(data => {
       // console.log(data);
       this.miPortfolio = data;
       this.educacionList = data.educacion;
       this.certificadoList = data.educacion.certificado;
     })
   }
}