import { Component } from '@angular/core';
import { DescripcionEducacion } from 'src/app/models/descripcioneducacion';
import { Educacion } from 'src/app/models/educacion';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
   
  miPortfolio: Educacion[]= [];
  miDescEdu: DescripcionEducacion[] = [];

  constructor(private datosPortfolio:DataPortfolioService) { }
 
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      this.miPortfolio = data;
    });
    this.datosPortfolio.obtenerDatosDescripcionEducacion().subscribe(desc => {
      this.miDescEdu = desc;
    })
  }
}
