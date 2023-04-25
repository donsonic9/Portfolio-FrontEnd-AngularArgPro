import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-heromod',
  templateUrl: './editar-heromod.component.html',
  styleUrls: ['./editar-heromod.component.css']
})
export class EditarHeromodComponent implements OnInit {

  formHero: FormGroup;
  // initialHero!: Hero;
  miPortfolio: Hero[] = [];
  
  constructor(private fb:FormBuilder, 
              private datosPortfolio:DataPortfolioService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { 
    //creamos los grupos de control para el formulario.
    this.formHero = this.fb.group({
      id: [''],
      img_profile: [''],
      saludo: [''],
      profesion: ['']
    });
  }


  ngOnInit(): void {
    // Fetch the hero to edit from the database using the id parameter from the route
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosHero().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formHero.patchValue({
        id: element?.id,
        img_profile: element?.img_profile,
        saludo: element?.saludo,
        profesion: element?.profesion
      });
    });
  }

  onSubmitHero() {
    
    const hero: Hero = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      img_profile: this.formHero.value.img_profile,
      saludo: this.formHero.value.saludo,
      profesion: this.formHero.value.profesion,
    };
    // console.log("hero en heromod.component.ts antes de llamar al servicio");
    // console.log(hero);

    this.datosPortfolio.editarHero(hero).subscribe( () => {
      // console.log("datos enviados al servicio");
    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInterface']);
  }

}
