const {Router} = require('express')
const { puthEncuesta} = require('../controllers/encuesta')
const { postEncuesta, getEncuesta, deleteEncuesta, putEncuesta, patchEncuesta } = require('../controllers/encuesta')
const router = Router()

router.get('/', getEncuesta)
router.post('/', postEncuesta )
router.delete('/', deleteEncuesta)
outer.put('/', putEncuesta)
router.patch('/', patchEncuesta)



module.exports = router