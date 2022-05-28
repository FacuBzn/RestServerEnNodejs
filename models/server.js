const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a la Base de datos
        this.conectarDataBase(); 
        
        //middlewares
        this.middlewares();
        
        //Rutas de la aplicacion
        this.routes();
    }
    
    async conectarDataBase(){
        await dbConnection();
    }

    middlewares(){

        //CORS
        this.app.use( cors());

        //Lectura y Parseo del body
        this.app.use( express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios')); 
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ->', this.port, 'ingresar en http://localhost:'+this.port);
        });
    }

}

module.exports = Server;