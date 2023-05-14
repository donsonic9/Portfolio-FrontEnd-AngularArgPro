Bienvenido a la parte Front-end realizada en Angular de mi portfolio!!!

Este front end consta de diversas partes, en principio, 3 rutas distintas entre si para la navegacion del usuario casual, login, y usuario admin.

DISEÑO: 
Se hizo especial énfasis en el diseño responsivo o adaptativo (Responsive Design), para que usuarios de cualquier tipo de dispositovo, puedan tener la mejor experiencia posible
 al momento de navegar. De igual forma, se presto atención a las transiciones, animaciones, y efectos visuales sutiles, para mejorar la calidad visual del producto.
 
En términos de diseño, se busco mantener una armonía entre la paleta de colores, tipo de fuentes, imagen de fondo, y demas elementos estéticos, para que la experiencia 
de usuario sea lo mas homogenea posible. Muchos elementos estan optimizados y creados teniendo en mente dicha armonía.
 
 TECNOLOGIAS: 
 
Se utilizaron principalmente HTML, CSS, TypeScript, Bootstrap 5, y Angular.
 
Entre las tecnologias utilizadas para realizar la mayoria de las funcionalidades en este front-end, se encuentran:

 - Angular Guards, para proteger las rutas necesarias.
 - Angular Routes
 - Angular Routing Service.
 - Firebase Auth, para autenticar usuario admin en el login.
 - Servicios de login, register, logout, de Firebase Auth.
 - Firebase Hosting.
 - Activated Route, para manejar parametros de manera dinamica en la URL
Entre muchos otros.

FUNCIONAMIENTO: 

Cuando se entra a la plataforma, se puede navegar normalmente, o utilizando la navbar, con sus respectivos botones a la derecha para conectar directamente
 con zonas de interes. Llegado al último componente, que es la zona de "Contacto", abajo  ala derecha tenemos un boton que nos lleva directamente arriba de todo.
 
Si bien varios elementos se mueven y tienen trancisiones, solo los elementos de Educacion, Proyectos, y Contacto, son elementos con los que se puede interactuar, haciendo click en algunas partes de los mismos, o pasando el mouse o el dedo (mobile) por encima para obtener mas información y acceso a links (Proyectos).

Si se tiene las credenciales de usuario admin, se puede logear, clickeando el boton arriba a la derecha. Una vez introducidas correctamente las credenciales, se tiene acceso a la creación, edición, y eliminado de diversos elementos. La forma de navegación es la misma que para un usuario no logeado. 

A continuación se detallan las acciones que se puede hacer en cada sección, referente a CRUD o ABML, siendo: 
 - C: Create (Alta)
 - R: Read (Lectura)
 - U: Update (Modificación)
 - D: Delete (Baja).

Secciones: 

 - Hero            -> RU
 - SobreMi         -> RU
 - Experiencia     -> CRUD
 - Educación       -> RU / CRUD
 - Habilidades     -> CRUD
 - Proyectos       -> CRUD
 - Footer/Contacto -> RU


 LOGIN WITH GOOGLE ACCOUNT:

Tambien se puede hacer LogIn con su cuenta de Google, para ello, ir al apartado de Login en la barra de navegación, tal cuál se explico previamente, y hacer click en el boton "Sign in with Google", se abrira la pantalla para seleccionar la cuenta que desea utilizar, clik en la cuenta, y listo! Una vez logeado con Google, usted podra observar su imagen y su nombre de cuenta de google en le seccion del inicio, a modo de muestra. 

De igual forma, es posible cerrar sesion y volver a la página de inicio, haciendo click en el mismo boton que nos lleva a la parte del login, arriba a la derecha de la navbar, click en cerrar sesion.

Sin mas, espero que sea de su agrado, y cualquier sugerencia/comentario es mas que bienvenido!

# FrontEndAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
