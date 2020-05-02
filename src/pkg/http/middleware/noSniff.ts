import { Request, Response, NextFunction } from 'express'

export function noSniffMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	res.setHeader('X-Content-Type-Options', 'nosniff')
	next()
}
