import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-user-inicio',
  templateUrl: './user-inicio.component.html',
  styleUrls: ['./user-inicio.component.css']
})
export class UserInicioComponent implements OnInit{

  miPortfolio: Mensaje[] = [];

  constructor(private datosPortfolio: DataPortfolioService,
    private auth: AuthService) {

  }

  ngOnInit(): void {
    // const date = new Date().toLocaleDateString('en-US', {
    //   day: '2-digit',
    //   month: 'long',
    //   year: 'numeric'
    // });
    const date = new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    });
    
    const userGoogle = this.auth.getUserLogged();
    const username = userGoogle?.displayName || '';
    const email = userGoogle?.email || '';
    const img_photo = userGoogle?.photoURL || '';

    const men: Mensaje = {
      fecha: date,
      username: username,
      email: email,
      img_photo: img_photo,
    };

    // console.log(men);

    this.datosPortfolio.crearMensaje(men).subscribe(() => {
      
    });
  }

}
