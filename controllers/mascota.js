const { response } = require('express')
const Mascota = require('../models/mascota')

const getMascota = async(req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const mascota = await Mascota.find()
    res.json({
        msg: 'GET API Mascota',
        mascota
    })
}

const postMascota = async (req, res) => {
    //Desestructuracion
    const { nombre, raza, peso } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const mascota = new Mascota({ nombre, raza, peso })


    await mascota.save()

    res.json({
        msg: 'POST API Mascota',
        mascota
    })
}

const deleteMascota = async( req, res) => {
    const { nombre } = req.query

    const mascota = await Mascota.findOneAndDelete({nombre : nombre})

    res.json({
        msg: 'DELETE API MASCOTA',
        mascota
    })
}

const putMascota = async ( req, res) => {
    const { nombreAnterior, nombreNuevo, raza, peso} = req.body

    const mascota = await Mascota.findOneAndUpdate({nombre: nombreAnterior},{nombre: nombreNuevo, raza: raza, peso: peso})

    res.json({
        msg: 'PUT API MASCOTA',
        mascota
    })
}

const patchMascota = async (req, res) => {
    const { nombre, peso} = req.body 

    const mascota = await Mascota.findOneAndUpdate ({nombre: nombre}, {peso : peso})

    res.json ({
        msg: "PATCH API MASCOTA",
        mascota
    })
}
module.exports = {
    getMascota,
    postMascota,
    putMascota,
    deleteMascota,
    patchMascota
}