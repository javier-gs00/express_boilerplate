import dotenv from 'dotenv'
dotenv.config()
import express, { Express, ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import routes from 'Src/routes'
import { LoggerStream, logger } from 'Src/utils'

function App(): Express {
	const app = express()
	app.set('PORT', process.env.PORT || 8000)
	app.use(cors())
	app.use(helmet())
	app.use(function(req: Request, res: Response, next: NextFunction): void {
		res.setHeader('X-Content-Type-Options', 'nosniff')
		next()
	})
	app.use(morgan('tiny', { stream: new LoggerStream() }))

	app.use('/', routes)

	// error handler
	app.use(function(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): Response {
		logger.error(err)
		return res.status(500).send(err)
	})

	// 404 hanlder
	app.use(function(req: Request, res: Response, next: NextFunction): Response {
		return res.status(404).send("Sorry can't find that!")
	})

	return app
}

export default App
