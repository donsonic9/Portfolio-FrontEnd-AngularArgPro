import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DescripcionEducacion } from 'src/app/models/descripcioneducacion';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-descripcioneducacion',
  templateUrl: './editar-descripcioneducacion.component.html',
  styleUrls: ['./editar-descripcioneducacion.component.css']
})
export class EditarDescripcioneducacionComponent implements OnInit{

  formDescEdu: FormGroup;
  miPortfolio: DescripcionEducacion[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formDescEdu = this.fb.group({
      id: [''],
      description: ['',[Validators.required, Validators.maxLength(500)]],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosDescripcionEducacion().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formDescEdu.patchValue({
        description: element?.description
      });
    });
  }

  // creamos los metodos para usarlos en el html:
  get Description() {
    return this.formDescEdu.get("description");
  }

  // validamos los campos para los validators
  get DescriptionValid() {
    return this.Description?.touched && !this.Description?.valid;
  }

  onSubmitDescEdu() {
    const descedu: DescripcionEducacion = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      description: this.formDescEdu.value.description
    };

    this.datosPortfolio.editarDescripcionEducacion(descedu).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }
}
