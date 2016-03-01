// import * as angular from 'angular'
// import * as angularMaterial from 'angular-material'
// 
// 
// const raiz = "./componentes/vistas/"
// const nombreComponente = 'tarea'
// const nombreFichero = 'tarea'
// 
// angular.module(nombreComponente, ['ngMaterial'])
//     .component(nombreComponente, {
//         templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`
//     })    
// 
// export default nombreComponente

import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'
import tareaCtrl from 'componentes/vistas/tarea/tarea-ctrl'

const raiz = "./componentes/vistas/"
const nombreComponente = 'tarea'

let configurarEstado = ($stateProvider) => {
    $stateProvider
        .state(nombreComponente, {
            url: `/${nombreComponente}/:tareaId`,
            template: `<${nombreComponente}></${nombreComponente}>`
        });
}

// MyController.$inject = ['$scope', 'greeter'];
// someModule.controller('MyController', MyController);
//
tareaCtrl.$inject = ['servicioTareas', '$stateParams', '$state', '$mdToast']
//configurarEstado.$inject = ['$stateProvider']
//
angular.module(nombreComponente, ['ngMaterial', 'ui.router'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`,
        controller: ('tareaCtrl', tareaCtrl)
    })
    .config(['$stateProvider', configurarEstado])
    //.config('$stateProvider', configurarEstado) Esto Peta
    //.config(['configurarEstado', configurarEstado]) Esto Peta tambien

export default nombreComponente