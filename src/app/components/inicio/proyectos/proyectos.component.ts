import { Component } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: Proyectos[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
