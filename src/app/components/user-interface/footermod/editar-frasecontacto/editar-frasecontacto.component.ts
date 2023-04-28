import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FraseContacto } from 'src/app/models/frasecontacto';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-frasecontacto',
  templateUrl: './editar-frasecontacto.component.html',
  styleUrls: ['./editar-frasecontacto.component.css']
})
export class EditarFrasecontactoComponent implements OnInit{

  formFraCon: FormGroup;
  miPortfolio: FraseContacto[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formFraCon = this.fb.group({
      id: [''],
      frase_descriptiva: [''],
      frase_contacto: [''],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosFraseContacto().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formFraCon.patchValue({
        id: element?.id,
        frase_descriptiva: element?.frase_descriptiva,
        frase_contacto: element?.frase_contacto
      });
    });
  }

  onSubmitFraCon() {
    const fracon: FraseContacto = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      frase_descriptiva: this.formFraCon.value.frase_descriptiva,
      frase_contacto: this.formFraCon.value.frase_contacto,
    };

    this.datosPortfolio.editarFraseContacto(fracon).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
