import morgan from 'morgan'
import { Request, Response, NextFunction } from 'express'
import { LoggerStream } from 'Src/utils'

let format: string | null = null

export function morganLogger(
	req: Request,
	res: Response,
	next: NextFunction,
): Function {
	if (!format) {
		format = process.env.NODE_ENV === 'production' ? 'combined' : 'tiny'
	}

	return morgan(format, { stream: new LoggerStream() })(req, res, next)
}
