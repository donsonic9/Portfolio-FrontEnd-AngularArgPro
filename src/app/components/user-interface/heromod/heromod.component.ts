import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-heromod',
  templateUrl: './heromod.component.html',
  styleUrls: ['./heromod.component.css']
})
export class HeromodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: Hero[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHero().subscribe(data => {
      this.miPortfolio = data;
    })
  }

}
