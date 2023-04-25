import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      logo_url: [''],
      posicionYTiempo: [''],
      description: [''],
    })
  }

  ngOnInit(): void {
    
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
