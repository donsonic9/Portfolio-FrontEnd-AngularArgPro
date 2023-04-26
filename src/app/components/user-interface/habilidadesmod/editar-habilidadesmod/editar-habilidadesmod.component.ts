import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabTec } from 'src/app/models/habilidadtecnica';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-habilidadesmod',
  templateUrl: './editar-habilidadesmod.component.html',
  styleUrls: ['./editar-habilidadesmod.component.css']
})
export class EditarHabilidadesmodComponent implements OnInit{

  formHabTec: FormGroup;
  miPortfolio: HabTec[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formHabTec = this.fb.group({
        id: [''],
        logo_url: [''],
        nombre: [''],
        nivel_o_idioma: ['']
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosHabTec().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formHabTec.patchValue({
        id: element?.id,
        logo_url: element?.logo_url,
        nombre: element?.nombre,
        nivel_o_idioma: element?.nivel_o_idioma
      });
    });
  }

  onSubmitHabTec() {
    const hab: HabTec = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      logo_url: this.formHabTec.value.logo_url,
      nombre: this.formHabTec.value.nombre,
      nivel_o_idioma: this.formHabTec.value.nivel_o_idioma
    };

    this.datosPortfolio.editarHabTec(hab).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }
}
