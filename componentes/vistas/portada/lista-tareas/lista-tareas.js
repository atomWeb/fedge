import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

import * as filaTarea from 'componentes/vistas/portada/lista-tareas/fila-tarea/fila-tarea'
import controladorTareas from 'componentes/vistas/portada/lista-tareas/controlador-tareas'
import moduloservicioTareas from 'servicios/servicioTareas' //este es el js servicioTareas.js

const raiz ="./componentes/vistas/portada/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'
//
controladorTareas.$inject = ["servicioTareas"]
angular
    .module(nombreComponente, ['ngMaterial', 'filaTarea', moduloservicioTareas]) // ahora 'tarea' (basalo coloca tarea pero a mi no me funciona) antes tarea.nombre cuando no se exportaba con el default
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
        controller: ('controladorTareas', controladorTareas)
    })    
    //.controller('nombreCtrl',controladorTareas) // aqui funcionaría dandole un nombre (nombreCtrl), el cual habria que colocar en el controller dentro del componente
export default nombreComponente