import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-heromod',
  templateUrl: './heromod.component.html',
  styleUrls: ['./heromod.component.css']
})
export class HeromodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
    })
  }

}
