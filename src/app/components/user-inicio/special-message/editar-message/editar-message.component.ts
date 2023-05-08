import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-editar-message',
  templateUrl: './editar-message.component.html',
  styleUrls: ['./editar-message.component.css']
})
export class EditarMessageComponent implements OnInit {

  formMen: FormGroup;
  miPortfolio: Mensaje[] = [];

  constructor(private fb: FormBuilder, 
              private datosPortfolio: DataPortfolioService,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formMen = this.fb.group({
      id: [''],
      mensaje: ['',[Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosMensaje().subscribe(data => {
      this.miPortfolio = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.miPortfolio.find(item => item.id === parseInt(heroId));
      this.formMen.patchValue({
        //id: element?.id,
        mensaje: element?.mensaje,
      });
    });
  }

  // creamos los metodos para usarlos en el html:
  get Mensaje() {
    return this.formMen.get("mensaje");
  }

  // validamos los campos para los validators
  get MensajeValid() {
    return this.Mensaje?.touched && !this.Mensaje?.valid;
  }


  // getCurrentUser() {
  //   const user = this.auth.getUserLogged();
  //   if (user) {
  //     const date = new Date().toLocaleDateString('en-US', {
  //       day: '2-digit',
  //       month: 'long',
  //       year: 'numeric'
  //     });
  //     // console.log(user?.email);
  //     // console.log(user?.displayName);
  //     // console.log(user?.photoURL);
  //     // console.log(date);
  //   }
    
  // }

  onSubmitMen() {
    const date = new Date().toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    const userGoogle = this.auth.getUserLogged();
    const username = userGoogle?.displayName || '';
    const email = userGoogle?.email || '';
    const img_photo = userGoogle?.photoURL || '';

    const men: Mensaje = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      fecha: date,
      username: username,
      email: email,
      img_photo: img_photo,
      mensaje: this.formMen.value.mensaje,
    };

    // console.log(men);

    this.datosPortfolio.editarMensaje(men).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Comentario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInicio'], { fragment: 'message-' + men.id });
  }

}
