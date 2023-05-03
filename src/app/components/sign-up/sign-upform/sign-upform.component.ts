import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-upform',
  templateUrl: './sign-upform.component.html',
  styleUrls: ['./sign-upform.component.css']
})
export class SignUpformComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.form = this.formBuilder.group({
      password: [''],
      email: ['']
    })
  }

  ngOnInit(): void {

  }

  onSubmitRegister() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    //Recuerda habilitar el codigo si vas a registrar mas gente
    console.log(user);
    // this.authService.register(user)
    //   .then (response => {
    //     console.log(response)
    //     this.router.navigate(['login']);
    //   })
    //   .catch (err => console.log(err));
  }

}
