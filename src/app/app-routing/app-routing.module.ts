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
import { CrearExperienciaComponent } from '../components/user-interface/experienciamod/crear-experiencia/crear-experiencia.component';
import { EditarExperienciaComponent } from '../components/user-interface/experienciamod/editar-experiencia/editar-experiencia.component';
import { CrearEducacionmodComponent } from '../components/user-interface/educacionmod/crear-educacionmod/crear-educacionmod.component';
import { EditarEducacionmodComponent } from '../components/user-interface/educacionmod/editar-educacionmod/editar-educacionmod.component';
import { EditarDescripcioneducacionComponent } from '../components/user-interface/educacionmod/editar-descripcioneducacion/editar-descripcioneducacion.component';
import { CrearHabilidadesmodComponent } from '../components/user-interface/habilidadesmod/crear-habilidadesmod/crear-habilidadesmod.component';
import { EditarHabilidadesmodComponent } from '../components/user-interface/habilidadesmod/editar-habilidadesmod/editar-habilidadesmod.component';
import { CrearProyectosmodComponent } from '../components/user-interface/proyectosmod/crear-proyectosmod/crear-proyectosmod.component';
import { EditarProyectosmodComponent } from '../components/user-interface/proyectosmod/editar-proyectosmod/editar-proyectosmod.component';
import { EditarFrasecontactoComponent } from '../components/user-interface/footermod/editar-frasecontacto/editar-frasecontacto.component';
import { EditarContactoComponent } from '../components/user-interface/footermod/editar-contacto/editar-contacto.component';

// array que contiene las rutas
const routes: Routes = [
  // 1er path carga la vista por defecto
  {path: "", redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userInterface', component: UserInterfaceComponent},
  {path: 'hero/editar/:id', component: EditarHeromodComponent},
  {path: 'sobremi/editar/:id', component: EditarSobreMimodComponent},
  {path: 'experiencia/crear', component: CrearExperienciaComponent},
  {path: 'experiencia/editar/:id', component: EditarExperienciaComponent},
  {path: 'educacion/crear', component: CrearEducacionmodComponent},
  {path: 'educacion/editar/:id', component: EditarEducacionmodComponent},
  {path: 'descripcioneducacion/editar/:id', component: EditarDescripcioneducacionComponent},
  {path: 'habilidadtecnica/crear', component: CrearHabilidadesmodComponent},
  {path: 'habilidadtecnica/editar/:id', component: EditarHabilidadesmodComponent},
  {path: 'proyectos/crear', component: CrearProyectosmodComponent},
  {path: 'proyectos/editar/:id', component: EditarProyectosmodComponent},
  {path: 'frasecontacto/editar/:id', component: EditarFrasecontactoComponent},
  {path: 'contacto/editar/:id', component: EditarContactoComponent}
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
