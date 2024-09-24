const express = require('express')
const { getCharacters } = require('../controllers/characterControllers')

const router = express.Router()

router.get("/", getCharacters)

module.exports = router 