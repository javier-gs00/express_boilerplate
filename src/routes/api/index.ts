import express, { Router } from 'express'
import dogRoutes from './dogs'

const router: Router = express.Router()

router.use('/dogs', dogRoutes)

export default router
