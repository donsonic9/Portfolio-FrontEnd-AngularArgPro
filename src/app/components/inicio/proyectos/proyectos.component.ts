import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  proyectosList: any;
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.miPortfolio = data;
      this.proyectosList = data.proyectos.proyecto;
      
    })
  }
}
