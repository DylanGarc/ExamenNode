const { response } = require('express')
const Usuario = require('../models/usuario')

const getUsuario = async(req, res = response) => {
    const usuario = await Usuario.find()
    res.json({
        msg: 'GET API Usuario',
        usuario
    })
}

const postUsuario = async (req, res) => {
    //Desestructuracion
    const { nombre, apellido, correo, contraseña, estado } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const usuario = new Usuario({ nombre, apellido, correo, contraseña, estado })


    await usuario.save()

    res.json({
        msg: 'POST API Usuario',
        usuario
    })
}

const deleteUsuario = async( req, res) => {
    const { nombre } = req.query

    const usuario = await Usuario.findOneAndDelete({nombre : nombre})

    res.json({
        msg: 'DELETE API USUARIO',
        usuario
    })
}
const putUsuario = async ( req, res) => {
    const { nombreAnterior, nombreNuevo, apellido, correo, contraseña, estado} = req.body

    const usuario = await Usuario.findOneAndUpdate({nombre: nombreAnterior},{nombre: nombreNuevo,apellido: apellido, correo: correo, contraseña: contraseña, estado:estado})

    res.json({
        msg: 'PUT API USUARIO',
        usuario
    })
}

const patchUsuario = async (req, res) => {
    const { nombre, apellido, contraseña} = req.body 

    const usuario = await Usuario.findOneAndUpdate ({nombre: nombre}, {apellido: apellido, contraseña:contraseña})

    res.json ({
        msg: "PATCH API USUARIO",
        usuario
    })
}
module.exports = {
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario,
    patchUsuario
}