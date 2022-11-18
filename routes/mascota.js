const {Router} = require('express')
const { puthMascota, patchMascota } = require('../controllers/mascota')
const router = Router()

const { postMascota, getMascota, putMascota, deleteMascota } = require('../controllers/mascota')


router.get('/', getMascota)
router.post('/', postMascota )
router.delete('/', deleteMascota)
router.put('/', putMascota)
router.patch('/', patchMascota)



module.exports = router