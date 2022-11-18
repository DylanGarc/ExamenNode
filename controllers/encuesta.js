const { response } = require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = async(req, res = response) => {
    const encuesta = await Encuesta.find()
    res.json({
        msg: 'GET API ENCUESTA',
        encuesta
    })
}
const postEncuesta = async (req, res) => {
    //Desestructuracion
   const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const encuesta = new Encuesta({   nombreEncuesta,
        fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })


    await encuesta.save()

    res.json({
        msg: 'POST API ENCUESTA',
        encuesta
    })
}
const deleteEncuesta = async( req, res) => {
    const { documentoEncuestado } = req.query

    const encuesta = await Encuesta.findOneAndDelete({documentoEncuestado : documentoEncuestado})

    res.json({
        msg: 'DELETE API ENCUESTA',
        encuesta
    })
}
module.exports = {
    getEncuesta,
    postEncuesta,
    deleteEncuesta
}