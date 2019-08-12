import { Request, Response, NextFunction } from 'express'
import { logger } from 'Src/utils'

export function routeNotFound(
	req: Request,
	res: Response,
	next: NextFunction,
): Response {
	logger.info(`Route: ${req.originalUrl}, not found`)
	return res.status(404).send("Sorry can't find that!")
}
