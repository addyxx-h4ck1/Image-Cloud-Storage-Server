const express = require('express')
const { handleImage } = require('../controllers/handle-image')
const router = express.Router()

router.post('/', handleImage)

//
module.exports = router
