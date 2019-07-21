import express, { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from 'Src/routes'
import mdw from 'Src/middleware'

export async function App(): Promise<Express> {
	const app = express()

	app.set('PORT', process.env.PORT || 8000)
	app.use(cors())
	app.use(helmet())
	app.use(mdw.noSniff)
	app.use(mdw.morganLogger)
	app.use('/', routes)
	app.use(mdw.errorHandler)
	app.use(mdw.routeNotFound)

	return app
}
