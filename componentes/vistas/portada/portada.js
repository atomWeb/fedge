import listaTareas from 'componentes/vistas/portada/lista-tareas/lista-tareas'

const nombreComponente = 'portada'

let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: '/',
            //template: '<lista-tareas></lista-tareas><tarea></tarea>'
            template: '<lista-tareas></lista-tareas>'
        });
}

angular
    .module(nombreComponente, ['ui.router', listaTareas])
    .config(['$stateProvider', configurarEstado])


export default nombreComponente