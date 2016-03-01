import * as angular from 'angular'

import portada from 'componentes/vistas/portada/portada'
import configuracion from 'componentes/vistas/configuracion/configuracion'
import tarea from 'componentes/vistas/tarea/tarea'
import navegacion from 'componentes/vistas/navegacion/navegacion'

const nombreComponente = 'vistas'

angular.module(nombreComponente, [portada, tarea, configuracion, navegacion])

export default nombreComponente