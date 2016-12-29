'use strict'

const app = require('./app'),
      server = app.listen( app.get('port'), () => 
      console.log(`iniciando API REST MVC Express en el puerdo ${app.get('port')}`) );