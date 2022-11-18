const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    correo:{
        type: String
    },
    contraseña:{
        type: Number
    },
    estado:{
        type: String
    }
})


module.exports = model('Usuario',UsuarioSchema)