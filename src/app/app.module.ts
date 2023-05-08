import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importamos Routing de Angular
import { AppRoutingModule } from './app-routing/app-routing.module';

// componentes de las vistas

import { AppComponent } from './app.component';

// Componentes donde se cargan todos los sub-componentes, que componen las vistas
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';

// inicio
import { NavbarComponent } from './components/inicio/navbar/navbar.component';
import { HeroComponent } from './components/inicio/hero/hero.component';
import { SobreMiComponent } from './components/inicio/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/inicio/experiencia/experiencia.component';
import { EducacionComponent } from './components/inicio/educacion/educacion.component';
import { HabilidadesComponent } from './components/inicio/habilidades/habilidades.component';
import { ProyectosComponent } from './components/inicio/proyectos/proyectos.component';
import { FooterComponent } from './components/inicio/footer/footer.component';

// login & signUp comparten lognavbar
import { LognavbarComponent } from './components/login/lognavbar/lognavbar.component';
import { LogformComponent } from './components/login/logform/logform.component';
import { SignUpformComponent } from './components/sign-up/sign-upform/sign-upform.component';

// user-interface
import { NavbarmodComponent } from './components/user-interface/navbarmod/navbarmod.component';
import { HeromodComponent } from './components/user-interface/heromod/heromod.component';
import { SobreMimodComponent } from './components/user-interface/sobre-mimod/sobre-mimod.component';
import { ExperienciamodComponent } from './components/user-interface/experienciamod/experienciamod.component';
import { EducacionmodComponent } from './components/user-interface/educacionmod/educacionmod.component';
import { HabilidadesmodComponent } from './components/user-interface/habilidadesmod/habilidadesmod.component';
import { ProyectosmodComponent } from './components/user-interface/proyectosmod/proyectosmod.component';
import { FootermodComponent } from './components/user-interface/footermod/footermod.component';

// Para habilitar las llamadas al servidor:
import { HttpClientModule } from '@angular/common/http';
// Para usar Formularios reactivos de Angular:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarHeromodComponent } from './components/user-interface/heromod/editar-heromod/editar-heromod.component';
import { EditarSobreMimodComponent } from './components/user-interface/sobre-mimod/editar-sobre-mimod/editar-sobre-mimod.component';
import { EditarExperienciaComponent } from './components/user-interface/experienciamod/editar-experiencia/editar-experiencia.component';
import { CrearExperienciaComponent } from './components/user-interface/experienciamod/crear-experiencia/crear-experiencia.component';
import { EditarEducacionmodComponent } from './components/user-interface/educacionmod/editar-educacionmod/editar-educacionmod.component';
import { CrearEducacionmodComponent } from './components/user-interface/educacionmod/crear-educacionmod/crear-educacionmod.component';
import { EditarDescripcioneducacionComponent } from './components/user-interface/educacionmod/editar-descripcioneducacion/editar-descripcioneducacion.component';
import { EditarHabilidadesmodComponent } from './components/user-interface/habilidadesmod/editar-habilidadesmod/editar-habilidadesmod.component';
import { CrearHabilidadesmodComponent } from './components/user-interface/habilidadesmod/crear-habilidadesmod/crear-habilidadesmod.component';
import { EditarProyectosmodComponent } from './components/user-interface/proyectosmod/editar-proyectosmod/editar-proyectosmod.component';
import { CrearProyectosmodComponent } from './components/user-interface/proyectosmod/crear-proyectosmod/crear-proyectosmod.component';
import { EditarFrasecontactoComponent } from './components/user-interface/footermod/editar-frasecontacto/editar-frasecontacto.component';
import { EditarContactoComponent } from './components/user-interface/footermod/editar-contacto/editar-contacto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UserInicioComponent } from './components/user-inicio/user-inicio.component';
import { SpecialNavbarComponent } from './components/user-inicio/special-navbar/special-navbar.component';
import { SpecialHeroComponent } from './components/user-inicio/special-hero/special-hero.component';
import { SpecialMessageComponent } from './components/user-inicio/special-message/special-message.component';
import { MessageComponent } from './components/inicio/message/message.component';
import { EditarMessageComponent } from './components/user-inicio/special-message/editar-message/editar-message.component';
import { CrearMessageComponent } from './components/user-inicio/special-message/crear-message/crear-message.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    SignUpComponent,
    UserInterfaceComponent,
    NavbarComponent,
    HeroComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LognavbarComponent,
    LogformComponent,
    SignUpformComponent,
    NavbarmodComponent,
    HeromodComponent,
    SobreMimodComponent,
    ExperienciamodComponent,
    EducacionmodComponent,
    HabilidadesmodComponent,
    ProyectosmodComponent,
    FootermodComponent,
    EditarHeromodComponent,
    EditarSobreMimodComponent,
    EditarExperienciaComponent,
    CrearExperienciaComponent,
    EditarEducacionmodComponent,
    CrearEducacionmodComponent,
    EditarDescripcioneducacionComponent,
    EditarHabilidadesmodComponent,
    CrearHabilidadesmodComponent,
    EditarProyectosmodComponent,
    CrearProyectosmodComponent,
    EditarFrasecontactoComponent,
    EditarContactoComponent,
    UserInicioComponent,
    SpecialNavbarComponent,
    SpecialHeroComponent,
    SpecialMessageComponent,
    MessageComponent,
    EditarMessageComponent,
    CrearMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Para que funcione el routing
    HttpClientModule,  //Para habilitar las llamadas al servidor
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())   //Para usar formularios reactivos de Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
