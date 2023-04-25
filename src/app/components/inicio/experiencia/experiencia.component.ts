import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: Experiencia[]= [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      this.miPortfolio = data;
    })
  }
}
