import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      url_facebook: ['',[Validators.required, Validators.maxLength(500)]],
      url_github: ['',[Validators.required, Validators.maxLength(500)]],
      url_instagram: ['',[Validators.required, Validators.maxLength(500)]],
      url_linkedin: ['',[Validators.required, Validators.maxLength(500)]],
      email: ['',[Validators.required, Validators.email]],
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

  // creamos los metodos para usarlos en el html:
  get Email() {
    return this.formCont.get("email");
  }
  
  get Url_instagram() {
    return this.formCont.get("url_instagram");
  }

  get Url_facebook() {
    return this.formCont.get("url_facebook");
  }

  get Url_linkedin() {
    return this.formCont.get("url_linkedin");
  }

  get Url_github() {
    return this.formCont.get("url_github");
  }

  // validamos los campos para los validators
  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }

  get Url_instagramValid() {
    return this.Url_instagram?.touched && !this.Url_instagram?.valid;
  }

  get Url_facebookValid() {
    return this.Url_facebook?.touched && !this.Url_facebook?.valid;
  }

  get Url_linkedinValid() {
    return this.Url_linkedin?.touched && !this.Url_linkedin?.valid;
  }

  get Url_githubValid() {
    return this.Url_github?.touched && !this.Url_github?.valid;
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
