import { Component } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-proyectosmod',
  templateUrl: './proyectosmod.component.html',
  styleUrls: ['./proyectosmod.component.css']
})
export class ProyectosmodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: Proyectos[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

  onDelete(id: any) {
    //alert(id)
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarProyectos(id).subscribe( () => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }
}
