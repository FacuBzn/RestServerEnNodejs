const Role = require('../models/role');
const Usuario = require ('../models/usuarios');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (! existeRol ){
            throw new Error(`El rol ${ rol } no esta registrado en la BD`)
    }
}


const existeEmail = async ( correo = '') => {
    // verificar si el correo existe realmente
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ){
        throw new Error (`El corre: ${correo}, ya se encuentra registrado en nuestra BD`);
    }
}


module.exports = {
    esRoleValido,
    existeEmail
}


