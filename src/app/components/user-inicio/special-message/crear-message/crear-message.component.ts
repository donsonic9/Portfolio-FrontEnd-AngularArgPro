import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-crear-message',
  templateUrl: './crear-message.component.html',
  styleUrls: ['./crear-message.component.css']
})
export class CrearMessageComponent {

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
  }

  // creamos los metodos para usarlos en el html:
  get Mensaje() {
    return this.formMen.get("mensaje");
  }

  // validamos los campos para los validators
  get MensajeValid() {
    return this.Mensaje?.touched && !this.Mensaje?.valid;
  }

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

    this.datosPortfolio.crearMensaje(men).subscribe(() => {
      // console.log("datos enviados")
    });

    alert("Comentario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['userInicio'], { fragment: 'message'});
  }

}
