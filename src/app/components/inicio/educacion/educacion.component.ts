import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
   // definimos una variable para conectar el sv con el html, mediante data binding.
   miPortfolio: any;
   educacionList: any;
   certificadoList: any;
   constructor(private datosPortfolio:DataPortfolioService) { }
 
   ngOnInit(): void {
     this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
       // console.log(data);
       this.miPortfolio = data;
       this.educacionList = data.educacion;
       this.certificadoList = data.educacion.certificado;
     })
   }
}
