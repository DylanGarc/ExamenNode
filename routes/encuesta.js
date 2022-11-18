const {Router} = require('express')
const { puthEncuesta} = require('../controllers/encuesta')
const { postEncuesta, getEncuesta, deleteEncuesta} = require('../controllers/encuesta')
const router = Router()

router.get('/', getEncuesta)
router.post('/', postEncuesta )
router.delete('/', deleteEncuesta)
// router.put('/', putUsuario)
// router.patch('/', patchUsuario)



module.exports = router