import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importamos el modulo Routes
import { RouterModule, Routes } from '@angular/router';
// Cargamos los componentes correspondientes a las vistas
import { InicioComponent } from '../components/inicio/inicio.component';
import { LoginComponent } from '../components/login/login.component';
//import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { UserInterfaceComponent } from '../components/user-interface/user-interface.component';
//Cargamos los distintos formularios.
import { EditarHeromodComponent } from '../components/user-interface/heromod/editar-heromod/editar-heromod.component';
import { EditarSobreMimodComponent } from '../components/user-interface/sobre-mimod/editar-sobre-mimod/editar-sobre-mimod.component';

// array que contiene las rutas
const routes: Routes = [
  // 1er path carga la vista por defecto
  {path: "", redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userInterface', component: UserInterfaceComponent},
  {path: 'hero/editar/:id', component: EditarHeromodComponent},
  {path: 'sobremi/editar/:id', component:  EditarSobreMimodComponent}
];
//{path: 'signUp', component: SignUpComponent} path eliminado, posible futura implementacion.



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
