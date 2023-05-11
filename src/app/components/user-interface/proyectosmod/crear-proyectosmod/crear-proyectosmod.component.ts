import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      nombre: ['',[Validators.required, Validators.maxLength(50)]],
      descripcion: ['',[Validators.required, Validators.maxLength(200)]],
      url_imagen: ['',[Validators.required, Validators.maxLength(255)]],
      url_website: ['',[Validators.required, Validators.maxLength(255)]],
      url_github: ['',[Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
  }

  // creamos los metodos para usarlos en el html:
  get Nombre() {
    return this.formProy.get("nombre");
  }
  
  get Descripcion() {
    return this.formProy.get("descripcion");
  }

  get Url_imagen() {
    return this.formProy.get("url_imagen");
  }

  get Url_website() {
    return this.formProy.get("url_website");
  }

  get Url_github() {
    return this.formProy.get("url_github");
  }

  // validamos los campos para los validators
  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  get Url_imagenValid() {
    return this.Url_imagen?.touched && !this.Url_imagen?.valid;
  }

  get Url_websiteValid() {
    return this.Url_website?.touched && !this.Url_website?.valid;
  }

  get Url_githubValid() {
    return this.Url_github?.touched && !this.Url_github?.valid;
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
