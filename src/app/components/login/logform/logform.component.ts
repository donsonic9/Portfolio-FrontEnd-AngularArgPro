import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})


export class LogformComponent implements OnInit {

  form: FormGroup;

  miPortfolio: User[] = [];

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

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


  onGoogleClick() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.authService.autoLogoutAfterInactivity();
        this.router.navigate(['userInicio']);
      })
      .catch(err => {
        console.log(err);
      })
  }


  onSubmitLogin() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    //console.log(user);
    this.authService.login(user)
      .then (response => {
        console.log(response)
        alert("Login realizado correctamente!")
        this.router.navigate(['userInterface']);
      })
      .catch (err => {
        console.log(err)
        alert("Error al intentar hacer Login. Vuelve a intentarlo.")
        location.reload()
      });
  }

}
