import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { SobreMi } from 'src/app/models/sobremi';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.

  miPortfolio: SobreMi[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSobreMi().subscribe(data => {
      this.miPortfolio = data;
    })
  }
}
