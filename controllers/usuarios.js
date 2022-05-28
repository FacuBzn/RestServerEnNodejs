const { response } = require('express');
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

    const body =  req.body;
    const usuario = new Usuario( body );
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







