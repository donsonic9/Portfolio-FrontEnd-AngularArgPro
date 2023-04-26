import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-crear-educacionmod',
  templateUrl: './crear-educacionmod.component.html',
  styleUrls: ['./crear-educacionmod.component.css']
})
export class CrearEducacionmodComponent {

  formEdu: FormGroup;
  miPortfolio: Educacion[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formEdu = this.fb.group({
      //id: [''],
      img_url: [''],
      institucion: [''],
      tituloYTiempo: [''],
      description: [''],
    })
  }

  ngOnInit(): void {
    
  }

  onSubmitEdu() {
    const edu: Educacion = {
      //id: parseInt(this.activatedRoute.snapshot.params['id']),
      img_url: this.formEdu.value.img_url,
      institucion: this.formEdu.value.institucion,
      tituloYTiempo: this.formEdu.value.tituloYTiempo,
      description: this.formEdu.value.description
    };

    this.datosPortfolio.crearEducacion(edu).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }
}
