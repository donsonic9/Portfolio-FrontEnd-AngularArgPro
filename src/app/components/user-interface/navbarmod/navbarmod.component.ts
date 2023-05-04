import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-navbarmod',
  templateUrl: './navbarmod.component.html',
  styleUrls: ['./navbarmod.component.css']
})
export class NavbarmodComponent {

  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: any[] = [];
  constructor(private datosPortfolio:DataPortfolioService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHero().subscribe(data => {
      this.miPortfolio = data;
    })
  }

  onReload() {
    location.reload()
    document.getElementById("upp")?.scrollIntoView({behavior: 'smooth'});
  }


  // las funciones "to" son para linkear los botones de la navbar a las secciones de la pagina.
  toSobreMi() {
    document.getElementById("sobre-mi-id")?.scrollIntoView({behavior: 'smooth'});
  }

  toHabilidades() {
    document.getElementById("habilidadesid")?.scrollIntoView({behavior: 'smooth'});
  }

  toProyectos() {
    document.getElementById("proyectos-id")?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto() {
    document.getElementById("contacto-id")?.scrollIntoView({behavior: 'smooth'});
  }

  onSignOut() {
    this.authService.logout()
      .then(() => {
        alert("Sesion finalizada correctamente.")
        this.router.navigate(['inicio'])
      })
      .catch(err => console.log(err))
  }


}
