import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DescripcionEducacion } from 'src/app/models/descripcioneducacion';
import { Educacion } from 'src/app/models/educacion';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-educacionmod',
  templateUrl: './educacionmod.component.html',
  styleUrls: ['./educacionmod.component.css']
})
export class EducacionmodComponent {
   
   miPortfolio: Educacion[]= [];
   miDescEdu: DescripcionEducacion[] = [];

   constructor(private datosPortfolio:DataPortfolioService, private router:Router) { }
 
   ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      this.miPortfolio = data;
    })
    this.datosPortfolio.obtenerDatosDescripcionEducacion().subscribe(desc => {
      this.miDescEdu = desc;
    })
  }

  onDelete(id: any) {
    //alert(id)
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarEducacion(id).subscribe( () => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }

}
