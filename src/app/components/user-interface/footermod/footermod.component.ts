import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-footermod',
  templateUrl: './footermod.component.html',
  styleUrls: ['./footermod.component.css']
})
export class FootermodComponent {

  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any;
  footerList: any;
  // reemplazamos el 'mailto: pepito@chang.com' con esta concatenacion, para poder editar el mail.
  mailtoSt:any = "mailto: ";
  mailtoString: any;

  constructor(private datosPortfolio:DataPortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
      this.footerList = data.footer;
      this.mailtoString = this.mailtoSt + data.footer.email;
    })
  }

  // funcion para smooth scrolling en el boton de subir
  toUpp() {
    document.getElementById("upp")?.scrollIntoView({behavior: 'smooth'});
  }

}
