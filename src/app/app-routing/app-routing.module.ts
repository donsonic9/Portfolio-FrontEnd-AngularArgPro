import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importamos el modulo Routes
import { RouterModule, Routes, CanActivate } from '@angular/router';
// Cargamos los componentes correspondientes a las vistas
import { InicioComponent } from '../components/inicio/inicio.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { UserInterfaceComponent } from '../components/user-interface/user-interface.component';
import { UserInicioComponent } from '../components/user-inicio/user-inicio.component';
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
//protegemos las url para gnt no autorizada
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthGuardService } from '../services/authA-guard.service';
import { AuthBGuardService } from '../services/auth-b-guard.service';

// array que contiene las rutas
const routes: Routes = [
  // 1er path carga la vista por defecto
  { path: "", redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userInterface', component: UserInterfaceComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'userInicio', component: UserInicioComponent },
  { path: 'hero/editar/:id', component: EditarHeromodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'sobremi/editar/:id', component: EditarSobreMimodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'experiencia/crear', component: CrearExperienciaComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'experiencia/editar/:id', component: EditarExperienciaComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'educacion/crear', component: CrearEducacionmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'educacion/editar/:id', component: EditarEducacionmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'descripcioneducacion/editar/:id', component: EditarDescripcioneducacionComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'habilidadtecnica/crear', component: CrearHabilidadesmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'habilidadtecnica/editar/:id', component: EditarHabilidadesmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'proyectos/crear', component: CrearProyectosmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'proyectos/editar/:id', component: EditarProyectosmodComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'frasecontacto/editar/:id', component: EditarFrasecontactoComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] },
  { path: 'contacto/editar/:id', component: EditarContactoComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])), canActivate: [AuthGuardService] }
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
