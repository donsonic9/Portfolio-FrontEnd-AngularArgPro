import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-proyectosmod',
  templateUrl: './proyectosmod.component.html',
  styleUrls: ['./proyectosmod.component.css']
})
export class ProyectosmodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  proyectosList: any;
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
      this.proyectosList = data.proyectos.proyecto;
      
    })
  }
}
