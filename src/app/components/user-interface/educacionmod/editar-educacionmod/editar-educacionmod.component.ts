import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-educacionmod',
  templateUrl: './editar-educacionmod.component.html',
  styleUrls: ['./editar-educacionmod.component.css']
})
export class EditarEducacionmodComponent implements OnInit{

  formEdu: FormGroup;
  miPortfolio: Educacion[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formEdu = this.fb.group({
      id: [''],
      img_url: ['',[Validators.required, Validators.maxLength(500)]],
      institucion: ['',[Validators.required, Validators.maxLength(84)]],
      tituloYTiempo: ['',[Validators.required, Validators.maxLength(90)]],
      description: ['',[Validators.required, Validators.maxLength(300)]],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formEdu.patchValue({
        id: element?.id,
        img_url: element?.img_url,
        institucion: element?.institucion,
        tituloYTiempo: element?.tituloYTiempo,
        description: element?.description
      });
    });
  }

  // creamos los metodos para usarlos en el html:
  get Img_url() {
    return this.formEdu.get("img_url");
  }

  get TituloYTiempo() {
    return this.formEdu.get("tituloYTiempo");
  }

  get Institucion() {
    return this.formEdu.get("institucion");
  }

  get Description() {
    return this.formEdu.get("description");
  }

  // validamos los campos para los validators
  get Img_urlValid() {
    return this.Img_url?.touched && !this.Img_url?.valid;
  }

  get TituloYTiempoValid() {
    return this.TituloYTiempo?.touched && !this.TituloYTiempo?.valid;
  }

  get InstitucionValid() {
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get DescriptionValid() {
    return this.Description?.touched && !this.Description?.valid;
  }

  onSubmitEdu() {
    const edu: Educacion = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      img_url: this.formEdu.value.img_url,
      institucion: this.formEdu.value.institucion,
      tituloYTiempo: this.formEdu.value.tituloYTiempo,
      description: this.formEdu.value.description
    };

    this.datosPortfolio.editarEducacion(edu).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }
}
