import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-experienciamod',
  templateUrl: './experienciamod.component.html',
  styleUrls: ['./experienciamod.component.css']
})
export class ExperienciamodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  experienciaList: any;
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
      this.experienciaList = data.experiencia;
    })
  }
}
