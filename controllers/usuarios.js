const { response } = require('express');

const usuariosGet = (req,res) =>{

    const {saludo= "Not saludo" ,name, apikey} = req.query;

    res.json({
        msg: 'Es un Get a la API - controlador',
        saludo,
        name,
        apikey
    });
}

const usuariosPost = (req,res) =>{

    const {nombre, profesion} =  req.body;

    res.json({
        msg: 'Es un Post a la API - Controlador',
        nombre,
        profesion
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







