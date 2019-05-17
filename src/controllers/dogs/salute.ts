import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'
// import { logger } from 'Src/utils'

export function salute(req: Request, res: Response): Response {
	const { name } = req.body

	// logger.info(`Requesting ${name} to salute`)

	const dog = new Dog(name)

	return res.status(200).send(dog.salute())
}
