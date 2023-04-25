import { Component, Input, Output, EventEmitter } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
// formularios de angular
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-experienciamod',
  templateUrl: './experienciamod.component.html',
  styleUrls: ['./experienciamod.component.css']
})

export class ExperienciamodComponent {
  
  miPortfolio: Experiencia[]= [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  // lee los datos de la base de datos, usando el servicio.
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      this.miPortfolio = data;
    })    
  }

}
