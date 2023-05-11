import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/models/sobremi';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-sobre-mimod',
  templateUrl: './editar-sobre-mimod.component.html',
  styleUrls: ['./editar-sobre-mimod.component.css']
})
export class EditarSobreMimodComponent implements OnInit {

  formSobreMi: FormGroup;
  miPortfolio: SobreMi[] = [];

  constructor(private fb:FormBuilder, 
              private datosPortfolio:DataPortfolioService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { 
      //creamos los grupos de control para el formulario.
      this.formSobreMi = this.fb.group({
        id: [''],
        second_img: ['',[Validators.required, Validators.maxLength(255)]],
        description: ['',[Validators.required, Validators.maxLength(255)]]
      });
  }

  ngOnInit(): void {
    // Fetch the hero to edit from the database using the id parameter from the route
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosSobreMi().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formSobreMi.patchValue({
        id: element?.id,
        second_img: element?.second_img,
        description: element?.description
      });
    });
  }


  // creamos los metodos para usarlos en el html:
  get Second_img() {
    return this.formSobreMi.get("second_img");
  }

  get Description() {
    return this.formSobreMi.get("description");
  }

  // validamos los campos para los validators
  get Second_imgValid() {
    return this.Second_img?.touched && !this.Second_img?.valid;
  }

  get DescriptionValid() {
    return this.Description?.touched && !this.Description?.valid;
  }


  onSubmitSobreMi() {
    
    const sobremi: SobreMi = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      second_img: this.formSobreMi.value.second_img,
      description: this.formSobreMi.value.description,
    };

    this.datosPortfolio.editarSobreMi(sobremi).subscribe( () => {
      // console.log("datos enviados al servicio");
    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
