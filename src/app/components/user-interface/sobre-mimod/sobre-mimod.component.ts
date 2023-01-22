import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-sobre-mimod',
  templateUrl: './sobre-mimod.component.html',
  styleUrls: ['./sobre-mimod.component.css']
})
export class SobreMimodComponent {

  miPortfolio: any;

  constructor(private datosPortfolio: DataPortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    })
  }

}
