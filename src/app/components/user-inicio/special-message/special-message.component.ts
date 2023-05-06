import { Component } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-special-message',
  templateUrl: './special-message.component.html',
  styleUrls: ['./special-message.component.css']
})
export class SpecialMessageComponent {

  miPortfolio: Mensaje[]= [];

  user: any;
  
  constructor(private datosPortfolio:DataPortfolioService, private auth: AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosMensaje().subscribe(data => {
      this.miPortfolio = data;
    })
    this.user = this.auth.getUserLogged();
  }

  //This analizes if the email is the same.
  isEditable(comment: Mensaje): boolean {
    return comment.email === this.user?.email;
  }

}
