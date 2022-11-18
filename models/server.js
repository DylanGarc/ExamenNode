const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.port
        this.usuariosPath = "/api/usuarios"
        this.mascotasPath = "/api/mascota"
        this.encuestasPath = "/api/encuesta"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.usuariosPath, require("../routes/usuario"))
        this.app.use(this.mascotasPath,require('../routes/mascota'))
        this.app.use(this.encuestasPath,require("../routes/encuesta"))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando por el puerto: ${this.port}`)
        })
    }

}

module.exports = Server