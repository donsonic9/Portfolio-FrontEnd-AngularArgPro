import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importamos el modulo Routes
import { RouterModule, Routes } from '@angular/router';
// Cargamos los componentes correspondientes a las vistas
import { InicioComponent } from '../components/inicio/inicio.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { UserInterfaceComponent } from '../components/user-interface/user-interface.component';

// array que contiene las rutas
const routes: Routes = [
  // 1er path carga la vista por defecto
  {path: "", redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'userInterface', component: UserInterfaceComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
