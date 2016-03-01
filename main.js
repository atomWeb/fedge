import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'

// import * as cpgToolbar from './componentes/cpg-toolbar/cpg-toolbar.js' //la ext js no es necesaria - Si se tuviera un mapeador se colocaria la ruta mapeada
// import * as sidenav from './componentes/sidenav/sidenav'
// import * as listaTareas from './componentes/lista-tareas/lista-tareas'
// import * as fab from './componentes/fab/fab'
// import * as fichaTarea from './componentes/ficha-tarea/ficha-tarea'

import 'jspm_packages/npm/angular-material@1.0.6/angular-material.css!';

import base from 'componentes/base/base' 
import vistas from 'componentes/vistas/vistas'

const appName = 'frontEdge'


// declaración del módulo principal y sus dependencias
angular
    .module(appName, ['ngMaterial', 'ui.router', base, vistas]) //Aqui si funciona 'portada' y portada, revisar en los otros porque no => ya se porque
    .config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

// angular
//     .module(appName, ['ngMaterial', 'cpgToolbar', 'sidenav', 'listaTareas', 'fab', 'fichaTarea'])
  
// arranque manual de AngularJS 
let documentoHTML = angular.element(document)

// uso de las arrow functions de ES6 
let iniciarApp = () => angular.bootstrap(document, [appName])
documentoHTML.ready(iniciarApp)