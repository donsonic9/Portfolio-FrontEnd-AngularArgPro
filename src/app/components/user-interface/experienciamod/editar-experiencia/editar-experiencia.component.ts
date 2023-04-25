import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit{

  formExpe: FormGroup;
  miPortfolio: Experiencia[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formExpe = this.fb.group({
      id: [''],
      logo_url: [''],
      posicionYTiempo: [''],
      description: [''],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formExpe.patchValue({
        id: element?.id,
        logo_url: element?.logo_url,
        posicionYTiempo: element?.posicionYTiempo,
        description: element?.description
      });
    });
  }

  onSubmitExpe() {
    const expe: Experiencia = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      logo_url: this.formExpe.value.logo_url,
      posicionYTiempo: this.formExpe.value.posicionYTiempo,
      description: this.formExpe.value.description
    };

    this.datosPortfolio.editarExperiencia(expe).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
