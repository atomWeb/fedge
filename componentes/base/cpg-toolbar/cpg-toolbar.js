import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz = './componentes/base/'
const nombreComponente = 'cpgToolbar' // Un modulo o componente no amdite el - "cpg-toolbar"
const nombreFichero = 'cpg-toolbar' //con esto "cpg" identificamos nuestros modulos, compoentes, etc


angular
    .module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html` 
    })

//export var nombre = nombreComponente // asi donde se consuma utilizariamos cpgToolbar.nombre no 'cpgToolbar' 
export default nombreComponente