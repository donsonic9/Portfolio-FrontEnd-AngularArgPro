import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})


export class LogformComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() { }

  // creamos los metodos para usarlos en el html:
  get Password() {
    return this.form.get("password");
  }

  get Mail() {
    return this.form.get("email");
  }

  // validamos los campos
  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event) {
    // Detenemos o prevenimos la propagacion de errores de un form
    event.preventDefault;
    // vemos que todo este en orden.
    if (this.form.valid) {
      // Aquí deberiamos llamar a nuestro servicio para enviar el formulario
      alert("Formulario enviado correctamente!");
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
    }
  }
}
