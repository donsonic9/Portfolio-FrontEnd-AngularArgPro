import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHero().subscribe(data => {
      this.miPortfolio = data;
    })
  }

}
