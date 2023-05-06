import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-special-navbar',
  templateUrl: './special-navbar.component.html',
  styleUrls: ['./special-navbar.component.css']
})
export class SpecialNavbarComponent {

  currentUserIn: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const userIn = this.auth.getUserLogged();
    this.currentUserIn = userIn;
  }


  //Recordar quitar cuando terminen los experimentos.
  getCurrentUser() {
    const user = this.auth.getUserLogged();
    if (user) {
      const date = new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      // console.log(`Name: ${user.displayName}`);
      // console.log(`Email: ${user.email}`);
      // console.log(`Photo URL: ${user.photoURL}`);
      // console.log(`Date: ${date}`);
      console.log(user?.email);
      console.log(user?.displayName);
      console.log(user?.photoURL);
      console.log(date);
    }
  }

  onReload() {
    document.getElementById("upp")?.scrollIntoView({behavior: 'smooth'});
    location.reload()
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
    this.auth.logout()
      .then(() => {
        alert("Sesion finalizada correctamente.")
        this.router.navigate(['inicio'])
      })
      .catch(err => console.log(err))
  }

}
