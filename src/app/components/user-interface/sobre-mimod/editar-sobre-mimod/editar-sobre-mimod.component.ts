import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/models/sobremi';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-sobre-mimod',
  templateUrl: './editar-sobre-mimod.component.html',
  styleUrls: ['./editar-sobre-mimod.component.css']
})
export class EditarSobreMimodComponent {

  formSobreMi: FormGroup;

  constructor(private fb:FormBuilder, 
              private datosPortfolio:DataPortfolioService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { 
      //creamos los grupos de control para el formulario.
      this.formSobreMi = this.fb.group({
        id: [''],
        second_img: [''],
        description: ['']
      });
  }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];
    // alert(id);
  }

  onSubmitSobreMi() {
    
    const sobremi: SobreMi = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      second_img: this.formSobreMi.value.second_img,
      description: this.formSobreMi.value.description,
    };
    console.log("sobremi en heromod.component.ts antes de llamar al servicio");
    console.log(sobremi);

    this.datosPortfolio.editarSobreMi(sobremi).subscribe( () => {
      console.log("datos enviados al servicio");
    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
