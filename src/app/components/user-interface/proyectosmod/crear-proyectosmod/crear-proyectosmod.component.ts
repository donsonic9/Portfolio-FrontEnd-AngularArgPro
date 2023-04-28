import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-crear-proyectosmod',
  templateUrl: './crear-proyectosmod.component.html',
  styleUrls: ['./crear-proyectosmod.component.css']
})
export class CrearProyectosmodComponent {

  formProy: FormGroup;
  miPortfolio: Proyectos[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formProy = this.fb.group({
      //id: [''],
      nombre: [''],
      descripcion: [''],
      url_imagen: [''],
      url_website: [''],
      url_github: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmitProy() {
    const proy: Proyectos = {
      //id: parseInt(this.activatedRoute.snapshot.params['id']),
      nombre: this.formProy.value.nombre,
      descripcion: this.formProy.value.descripcion,
      url_imagen: this.formProy.value.url_imagen,
      url_website: this.formProy.value.url_website,
      url_github: this.formProy.value.url_github,
    };

    this.datosPortfolio.crearProyectos(proy).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
