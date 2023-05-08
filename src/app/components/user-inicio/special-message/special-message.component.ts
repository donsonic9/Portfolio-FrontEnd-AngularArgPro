import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-special-message',
  templateUrl: './special-message.component.html',
  styleUrls: ['./special-message.component.css']
})
export class SpecialMessageComponent  implements OnInit{

  miPortfolio: Mensaje[]= [];

  user: any;

  pepe: any;
  
  constructor(private datosPortfolio:DataPortfolioService, private auth: AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosMensaje().subscribe(data => {
      this.miPortfolio = data;
      this.pepe = this.hasUserCommented();
    })
    this.user = this.auth.getUserLogged();
  }

  //analizes if user has commented or not, and shows button depending on the answer.
  hasUserCommented() {
    //once acces to data, it finds the element with same email. If it found something
    const userEmail = this.user.email
    const element = this.miPortfolio.find(item => item.email === userEmail);
    // console.log(element);
    return element
  }

  onDelete(id: any) {
    //alert(id)
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarMensaje(id).subscribe( () => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }

  //This analizes if the email is the same.
  isEditable(comment: Mensaje): boolean {
    return comment.email === this.user?.email;
  }

}
