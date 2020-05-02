import express, { Express } from 'express'
import { DogsService } from 'Src/pkg/dog/dog.service'
import { createDogsHandler } from './handlers/dog.handler'
import { ActionsService } from 'Src/pkg/actions/actions.service'
import { createActionsHandler } from './handlers/actions.handler'

export function createRestServer(
	actionsService: ActionsService,
	dogsService: DogsService,
): Express {
	const app = express()

	const router = express.Router()
	createDogsHandler(router, dogsService)
	createActionsHandler(router, actionsService)

	app.use('/', router)

	return app
}
