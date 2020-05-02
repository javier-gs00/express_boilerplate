import express, { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { DogsService } from 'Src/pkg/dogs/dog.service'
import { createDogsHandler } from './handlers/dog.handler'
import { ActionsService } from 'Src/pkg/actions/actions.service'
import { createActionsHandler } from './handlers/actions.handler'
import { noSniffMiddleware } from 'Src/pkg/http/middleware/noSniff'
// eslint-disable-next-line max-len
import { morganLoggerMiddleware } from 'Src/pkg/http/middleware/morgan'
// eslint-disable-next-line max-len
import { errorHandlerMiddleware } from 'Src/pkg/http/middleware/error'
// eslint-disable-next-line max-len
import { routeNotFoundMiddleware } from 'Src/pkg/http/middleware/routeNotFound'

export function createRestServer(
	actionsService: ActionsService,
	dogsService: DogsService,
): Express {
	const app = express()

	app.use(cors())
	app.use(helmet())
	app.use(noSniffMiddleware)
	app.use(morganLoggerMiddleware)

	const router = express.Router()
	createDogsHandler(router, dogsService)
	createActionsHandler(router, actionsService)
	app.use('/', router)

	app.use(errorHandlerMiddleware)
	app.use(routeNotFoundMiddleware)

	return app
}
