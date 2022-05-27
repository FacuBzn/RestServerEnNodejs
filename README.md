#Para comenzar a crear un RestServer creamos con el comando
    *1- npm init -y
    (el archivo package.js que nos sera necesario).
    *2- npm install express
    (sirve para config nuestro servidor).
    *3- npm install dotenv
    (config variables de entorno).
    *4- npm install cors
    (ciertas paginas webs puedan acceder a su rest api - proteger el servidor).

    con poner dentro del app.js ya creamos nuestro WebServer o RestServer:
    /*const express = require('express');
    require('dotenv').config();
    const app = express();
    const port = process.env.PORT;

    app.get('/',  (req, res) => {
    res.send('Hello World')
    })

    app.listen(port, () => {
        console.log(`Servidor corriendo en ->${port}, http://localhost:${port}/`)
    })*/