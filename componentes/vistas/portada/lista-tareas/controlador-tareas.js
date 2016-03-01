// se hace así o como clase
// let controladorTareas = function (servicioTareas) {
//     this.tareas = servicioTareas.tareas
// }


class controladorTareas {
  constructor(servicioTareas) {
    this.tareas = servicioTareas.tareas
  }
}

export default controladorTareas