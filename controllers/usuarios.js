const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const Usuario = require('../models/usuarios');


const usuariosGet = (req,res) =>{

    const {saludo= "Not saludo" ,name, apikey} = req.query;

    res.json({
        msg: 'Es un Get a la API - controlador',
        saludo,
        name,
        apikey
    });
}

const usuariosPost = async (req,res) =>{

    const errors =  validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol } =  req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // verificar si el correo existe realmente
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ){
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado en nuestra Base de Datos'
        });
    }

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    // encriptar en una sola via = hashSync , 10 son las vueltas de complejidad de la encriptacion
    usuario.password =  bcryptjs.hashSync( password, salt); //Lo que necesita para encriptar la contraseña 
    
    //guarda en DB
    await usuario.save();

    res.json({
        msg: 'Es un Post a la API - Controlador',
        usuario
    });
}

const usuariosPut = (req,res) =>{

    const id = req.params.id;

    res.json({
        msg: 'Es un Put a la API - Controlador',
        id
    });
}

const usuariosDelete = (req,res) =>{
    res.json({
        msg: 'Es un Delete a la API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}







