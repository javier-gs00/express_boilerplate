import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'
// import { logger } from 'Src/utils'

export function performAction(req: Request, res: Response): Response {
	const { name, action } = req.body

	// logger.info(`Requesting ${name} to perform ${action}`)

	const dog = new Dog(name)

	return res.status(200).send(dog.performAction(action))
}
