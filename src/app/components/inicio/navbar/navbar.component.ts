import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
  

}
