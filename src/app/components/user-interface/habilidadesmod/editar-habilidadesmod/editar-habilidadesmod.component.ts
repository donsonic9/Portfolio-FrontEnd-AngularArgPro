import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
        logo_url: ['',[Validators.required, Validators.maxLength(255)]],
        nombre: ['',[Validators.required, Validators.maxLength(24)]],
        nivel_o_idioma: ['',[Validators.required]]
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

  //getters
  get Logo_url() {
    return this.formHabTec.get("logo_url")
  }

  get Nombre() {
    return this.formHabTec.get("nombre")
  }

  get Nivel_o_idioma() {
    return this.formHabTec.get("nivel_o_idioma")
  }

  //validar los campos
  get Logo_urlValid() {
    return this.Logo_url?.touched && !this.Logo_url?.valid;
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get Nivel_o_idiomaValid() {
    return this.Nivel_o_idioma?.touched && !this.Nivel_o_idioma?.valid;
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
