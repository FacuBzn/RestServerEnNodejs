#Para comenzar a crear un RestServer creamos con el comando
    
    Dato no menor es ``` npm install``` para reconstruir los modulos de Node
    *1- npm init -y
    (el archivo package.js que nos sera necesario).
    *2- npm install express
    (sirve para config nuestro servidor).
    *3- npm install dotenv
    (config variables de entorno).
    *4- npm install cors
    (ciertas paginas webs puedan acceder a su rest api - proteger el servidor).
    *5 npm i mongoose
    (conexion con la base de datos, facilita las bases de datos)

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

    comandos basicos para subir los archivos. 
    git init, para iniciar la captura, 
    git add . para subir todos los archivos
    git commit -m "agregar un comentario de lo que se hizo"
    git push para subir el archivo