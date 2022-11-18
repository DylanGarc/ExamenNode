const {Router} = require('express')
const { puthUsuario} = require('../controllers/usuarios')
const { postUsuario, getUsuario, deleteUsuario, putUsuario, patchUsuario} = require('../controllers/usuarios')
const router = Router()

router.get('/', getUsuario)
router.post('/', postUsuario )
router.delete('/', deleteUsuario)
router.put('/', putUsuario)
router.patch('/', patchUsuario)



module.exports = router