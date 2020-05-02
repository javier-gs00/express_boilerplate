import { Request, Response, NextFunction } from 'express'
import { logger } from 'Src/utils'

export function routeNotFoundMiddleware(
	req: Request,
	res: Response,
	next: NextFunction, // eslint-disable-line
): Response {
	logger.info(`Route: ${req.originalUrl}, not found`)
	return res.status(404).send("Sorry can't find that!") // eslint-disable-line
}
