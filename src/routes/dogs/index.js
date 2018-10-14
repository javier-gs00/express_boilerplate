import express from 'express'
import bodyParser from 'body-parser'
import dogs from 'Controllers/dogs'

const router = express.Router()

router.use(bodyParser.json())
router.post('/salute', dogs.salute)
router.get('/actions', dogs.getActions)
router.post('/actions', dogs.performAction)

export { router as dogRoutes }