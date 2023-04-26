import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
// formularios de angular
import { Experiencia } from 'src/app/models/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experienciamod',
  templateUrl: './experienciamod.component.html',
  styleUrls: ['./experienciamod.component.css']
})

export class ExperienciamodComponent {
  
  miPortfolio: Experiencia[]= [];
  
  constructor(private datosPortfolio:DataPortfolioService, private router: Router) { }

  // lee los datos de la base de datos, usando el servicio.
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      this.miPortfolio = data;
    })    
  }

  onDelete(id: any) {
    //alert(id)
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarExperiencia(id).subscribe( () => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }

}
