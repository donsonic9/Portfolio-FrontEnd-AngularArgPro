import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-proyectosmod',
  templateUrl: './editar-proyectosmod.component.html',
  styleUrls: ['./editar-proyectosmod.component.css']
})
export class EditarProyectosmodComponent implements OnInit{

  formProy: FormGroup;
  miPortfolio: Proyectos[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formProy = this.fb.group({
      id: [''],
      nombre: [''],
      descripcion: [''],
      url_imagen: [''],
      url_website: [''],
      url_github: [''],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formProy.patchValue({
        id: element?.id,
        nombre: element?.nombre,
        descripcion: element?.descripcion,
        url_imagen: element?.url_imagen,
        url_website: element?.url_website,
        url_github: element?.url_github,
      });
    });
  }

  onSubmitProy() {
    const proy: Proyectos = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      nombre: this.formProy.value.nombre,
      descripcion: this.formProy.value.descripcion,
      url_imagen: this.formProy.value.url_imagen,
      url_website: this.formProy.value.url_website,
      url_github: this.formProy.value.url_github,
    };

    this.datosPortfolio.editarProyectos(proy).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
