import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'
import { logger } from 'Src/utils'

export function getActions(req: Request, res: Response): Response {
	logger.info('requesting list of actions')

	const dog = new Dog('Stormy')

	return res.status(200).send(dog.getActions())
}
