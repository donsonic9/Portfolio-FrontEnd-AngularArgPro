import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { FraseContacto } from 'src/app/models/frasecontacto';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-footermod',
  templateUrl: './footermod.component.html',
  styleUrls: ['./footermod.component.css']
})
export class FootermodComponent implements OnInit{

  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: FraseContacto[] = [];
  miContacto: Contacto[] = [];

  constructor(private datosPortfolio:DataPortfolioService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosFraseContacto().subscribe(data => {
      this.miPortfolio = data;
    });
    this.datosPortfolio.obtenerDatosContacto().subscribe(contacto => {
      this.miContacto = contacto;
    });
  }

  // funcion para smooth scrolling en el boton de subir
  toUpp() {
    document.getElementById("upp")?.scrollIntoView({behavior: 'smooth'});
  }

}
