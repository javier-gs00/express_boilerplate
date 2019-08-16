import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import { logger } from 'Src/utils'

export function errorHandler(
	err: ErrorRequestHandler,
	req: Request,
	res: Response,
	next: NextFunction, // eslint-disable-line
): Response {
	logger.error(err)
	return res.status(500).send(err)
}
