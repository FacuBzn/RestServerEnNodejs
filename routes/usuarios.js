const { Router } =  require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, existeEmail } = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();
        router.get('/', usuariosGet );

        router.post('/',[
                check('nombre','El nombre del cliente es obligatorio conocerlo').not().isEmpty(), // no tiene que estar vacio => not().isEmpty(),
                check('password','La password debe ser de mas de 6 letras, por favor').isLength({min:6}), //valida la cantidad de caracteres sea minimo de 6
                check('correo','El correo no es valido').isEmail(), //valida que sea un email
                check('correo').custom( existeEmail ), //valida que sea un email
                //check('rol','No es un rol valido o Permitido').isIn(['ADMIN_ROLE','USER_ROLE']), //valida que exista en ...un conjunto de datos que puede ser de una base de datos
                check('rol').custom( esRoleValido ),
                validarCampos
        ] ,usuariosPost );

        router.put('/:id', usuariosPut );

        router.delete('/', usuariosDelete );

module.exports = router;