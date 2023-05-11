import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {

  formExpe: FormGroup;
  miPortfolio: Experiencia[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formExpe = this.fb.group({
      // id: [''],
      logo_url: ['',[Validators.required, Validators.maxLength(255)]],
      posicionYTiempo: ['',[Validators.required, Validators.maxLength(84)]],
      description: ['',[Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    
  }


  // creamos los metodos para usarlos en el html:
  get Logo_url() {
    return this.formExpe.get("logo_url");
  }

  get PosicionYTiempo() {
    return this.formExpe.get("posicionYTiempo");
  }

  get Description() {
    return this.formExpe.get("description");
  }

  // validamos los campos para los validators
  get Logo_urlValid() {
    return this.Logo_url?.touched && !this.Logo_url?.valid;
  }

  get PosicionYTiempoValid() {
    return this.PosicionYTiempo?.touched && !this.PosicionYTiempo?.valid;
  }

  get DescriptionValid() {
    return this.Description?.touched && !this.Description?.valid;
  }

  onSubmitExpe() {
    const expe: Experiencia = {
      // id: parseInt(this.activatedRoute.snapshot.params['id']),
      logo_url: this.formExpe.value.logo_url,
      posicionYTiempo: this.formExpe.value.posicionYTiempo,
      description: this.formExpe.value.description
    };

    this.datosPortfolio.crearExperiencia(expe).subscribe(() => {
      console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }
}
