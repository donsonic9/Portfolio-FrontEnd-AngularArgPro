import { Component } from '@angular/core';
import { SobreMi } from 'src/app/models/sobremi';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-sobre-mimod',
  templateUrl: './sobre-mimod.component.html',
  styleUrls: ['./sobre-mimod.component.css']
})
export class SobreMimodComponent {

  miPortfolio: SobreMi[] = [];

  constructor(private datosPortfolio: DataPortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSobreMi().subscribe(data =>{
      this.miPortfolio = data;
      console.log(data);
    })
  }

}
