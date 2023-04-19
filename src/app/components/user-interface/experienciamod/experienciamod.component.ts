import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EXPE } from './mock-expe';
import { ExpeInterface } from './ExpeInterface';

import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
// formularios de angular
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experienciamod',
  templateUrl: './experienciamod.component.html',
  styleUrls: ['./experienciamod.component.css']
})


export class ExperienciamodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.  
  miPortfolio: any;

  experienciaList: any;
  form: FormGroup;
  
  constructor(private datosPortfolio:DataPortfolioService, private formBuilder:FormBuilder) {

    this.form = this.formBuilder.group({
      logo: ['', [Validators.required]],
      posicionYtiempo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    })

   }


  //  estos get obtienen el valor del campo del formulario.
   get Logo() {
    return this.form.get("logo");
   }

   get posYtiempo() {
    return this.form.get("posicionYtiempo");
   }

   get Descripcion() {
    return this.form.get("descripcion");
   }

  // lee los datos de la base de datos, usando el servicio.
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      // console.log(data);
      this.miPortfolio = data;
      this.experienciaList = data.experiencia;
    })

    
  }

  public enviarData() {
    // this.datosPortfolio.post('http://localhost:5000/experiencia', 
    // {
    //   logo:this.form.value.logo,
    //   posicionYtiempo:this.form.value.posicionYtiempo,
    //   descripcion:this.form.value.descripcion
    // })
    alert("Formulario enviado!");
  }

  deleteExpe() {
    let resultado = confirm("Deseas eliminar este elemento?");
    console.log("deleteExpe funciona");
    if (resultado) {
      console.log("if ejecutado correctamente, elemento eliminado");
      alert("Experiencia eliminada!")
    } else {

    }

  }

}
