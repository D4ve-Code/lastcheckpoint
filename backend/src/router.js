const express = require('express')
const app = express()

app.use(express.json())

const router = express.Router()

const usersController = require('./controllers/UsersController')
const countriesController = require('./controllers/CountriesController')

router.get('/users', usersController.browse)
router.get('/users', usersController.read)
router.put('users/:id', usersController.edit)
router.post('/users', usersController.add)
router.delete('/users/:id', usersController.destroy)

router.get('/countries', countriesController.browse)
router.post('/countries', countriesController.add)

module.exports = router
