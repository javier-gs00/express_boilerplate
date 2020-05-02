import express, { Express } from 'express'
import { DogService } from 'Src/pkg/dog/dog.service'
import { createDogsHandler } from './handlers/dog.handler'

export function createRestServer(dogService: DogService): Express {
	const app = express()

	const router = express.Router()
	createDogsHandler(router, dogService)

	app.use('/', router)

	return app
}
