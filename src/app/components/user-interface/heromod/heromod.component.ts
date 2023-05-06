import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-heromod',
  templateUrl: './heromod.component.html',
  styleUrls: ['./heromod.component.css']
})
export class HeromodComponent {
  // definimos una variable para conectar el sv con el html, mediante data binding.
  miPortfolio: Hero[] = [];
  
  constructor(private datosPortfolio:DataPortfolioService, private auth: AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHero().subscribe(data => {
      this.miPortfolio = data;
    })
  }


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
  
  

}
