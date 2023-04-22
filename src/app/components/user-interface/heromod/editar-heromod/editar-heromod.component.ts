import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-heromod',
  templateUrl: './editar-heromod.component.html',
  styleUrls: ['./editar-heromod.component.css']
})
export class EditarHeromodComponent {

  // hero: Hero;

  formHero: FormGroup;
  

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
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
  }

  onSubmitHero() {
    
    const hero: Hero = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      img_profile: this.formHero.value.img_profile,
      saludo: this.formHero.value.saludo,
      profesion: this.formHero.value.profesion,
    };
    console.log("hero en heromod.component.ts antes de llamar al servicio");
    console.log(hero);

    this.datosPortfolio.editarHero(hero).subscribe( () => {
      console.log("datos enviados al servicio");
    });

    this.router.navigate(['userInterface']);
  }

}
