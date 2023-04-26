import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabTec } from 'src/app/models/habilidadtecnica';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-crear-habilidadesmod',
  templateUrl: './crear-habilidadesmod.component.html',
  styleUrls: ['./crear-habilidadesmod.component.css']
})
export class CrearHabilidadesmodComponent {

  formHabTec: FormGroup;
  miPortfolio: HabTec[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formHabTec = this.fb.group({
        //id: [''],
        logo_url: [''],
        nombre: [''],
        nivel_o_idioma: ['']
    })
  }

  ngOnInit(): void {

  }

  onSubmitHabTec() {
    const hab: HabTec = {
      //id: parseInt(this.activatedRoute.snapshot.params['id']),
      logo_url: this.formHabTec.value.logo_url,
      nombre: this.formHabTec.value.nombre,
      nivel_o_idioma: this.formHabTec.value.nivel_o_idioma
    };

    this.datosPortfolio.crearHabTec(hab).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
