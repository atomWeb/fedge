import * as angular from 'angular'

import toolbar from 'componentes/base/cpg-toolbar/cpg-toolbar'
import sidenav from 'componentes/base/sidenav/sidenav'
import fab from 'componentes/base/fab/fab'
import anuncio from 'componentes/base/anuncio/anuncio.js'

const nombreComponente = 'base'

angular.module(nombreComponente, [toolbar, sidenav, fab, anuncio])

export default nombreComponente