import express, { Express } from 'express'
import { DogsService } from 'Src/pkg/dog/dog.service'
import { createDogsHandler } from './handlers/dog.handler'

export function createRestServer(dogsService: DogsService): Express {
	const app = express()

	const router = express.Router()
	createDogsHandler(router, dogsService)

	app.use('/', router)

	return app
}
