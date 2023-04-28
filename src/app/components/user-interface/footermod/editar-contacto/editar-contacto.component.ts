import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit{

  formCont: FormGroup;
  miPortfolio: Contacto[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formCont = this.fb.group({
      id: [''],
      url_facebook: [''],
      url_github: [''],
      url_instagram: [''],
      url_linkedin: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosContacto().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formCont.patchValue({
        id: element?.id,
        url_facebook: element?.url_facebook,
        url_github: element?.url_github,
        url_instagram: element?.url_instagram,
        url_linkedin: element?.url_linkedin,
        email: element?.email
      });
    });
  }

  onSubmitCont() {
    const cont: Contacto = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      url_facebook: this.formCont.value.url_facebook,
      url_github: this.formCont.value.url_github,
      url_instagram: this.formCont.value.url_instagram,
      url_linkedin: this.formCont.value.url_linkedin,
      email: this.formCont.value.email
    };

    this.datosPortfolio.editarContacto(cont).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
