const express = require('express')
const { getCharacters, getCharacterById } = require('../controllers/characterControllers')

const router = express.Router()

router.get("/", getCharacters)
router.get("/:id", getCharacterById)

module.exports = router 